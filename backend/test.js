import dns from "node:dns";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("DNS:", dns.getServers());

try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected!", conn.connection.host);
} catch (e) {
    console.error(e);
}