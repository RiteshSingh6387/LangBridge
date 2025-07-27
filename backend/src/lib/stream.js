import pkg from "stream-chat";
const { StreamChat } = pkg;

import "dotenv/config"

const apiKey = process.env.STRAM_API_KEY
const apiSecret = process.env.STRAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("Stream API key or Secret is missing");
}
const streamClient = StreamChat.getInstance(apiKey, apiSecret);
export const upsertStreamUser = async(userData)=>{
    try{
        await streamClient.upsertUsers([userData]);
        return userData
    }catch(error){
        console.error("Error upserting Stream user", error);
    };
};

// todo: do it later
export const generateStreamToken = (userId)=>{
    try{
        //ensure userId in string
        const userIdStr = userId.toString()
        return streamClient.createToken(userIdStr);
    }catch(error){
        console.error("Error generating Stream token:", error);
    }
}