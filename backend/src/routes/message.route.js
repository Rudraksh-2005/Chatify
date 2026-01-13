import express from 'express';

const router=express.Router();

router.get('/send',(req,res)=>{
    console.log("Message sent");
});



export default router;