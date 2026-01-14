import User from '../models/user.model.js';
import { generateToken } from '../lib/utils.js';
import bcrypt from 'bcryptjs';
import { sendWelcomeEmail } from '../emails/emailHeaders.js';
import dotenv from 'dotenv'; 
dotenv.config();   

export const signup = async (req,res)=>{
    const {fullName,email,password}=req.body;

    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
        if(password.length<6){
            return res.status(400).json({message:"Password must be at least 6 characters long"});
        }
        const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)){
            return res.status(400).json({message:"Invalid email format"});
        }

        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User with this email already exists"});
        }
        //123456=>hashed password=>sdgfhjkl23456sdfghj
        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUser=new User({
            fullName,
            email,
            password:hashedPassword,
        })

        if(newUser){
            //before CR

            // generateToken(newUser._id,res);
            // await newUser.save();

            //after CR

            const savedUser= await newUser.save();
            generateToken(savedUser._id,res);

            //send a welcome email to the user
            try{
                await sendWelcomeEmail(savedUser.email, savedUser.fullName, process.env.CLIENT_URL);
            }catch(error){
                console.error("Failed to send welcome email:", error);
            }


            return res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                profilepic:newUser.profilepic,
            });

        }
        else{
            return res.status(400).json({message:"Invalid user data"});
        }

    }catch(error){
        console.error("Error in signup controller :", error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

export const login=async(req,res)=>{
    const {email,password}=req.body;

    try{
        const user= await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const isPasswordMatch= await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        generateToken(user._id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            email:user.email,
            profilepic:user.profilepic,
        });
    }
    catch(error){
        console.error("Error in login controller :", error);
        return res.status(500).json({message:"Internal Server Error"});
    }   

}

export const logout=(_,res)=>{
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
};
