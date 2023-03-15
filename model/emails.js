import mongoose from "mongoose";
import bcrypt from "bcrypt"




const emailSchema = new mongoose.Schema({

    email:{
        type: String,
        require:true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/]
    },
    password:{
        type: String,
        require:true
        
    }

    
})

emailSchema.methods.comparePassword = async function (password){
    const match = await bcrypt.compare(password, this.password);
    return match
}
const User = mongoose.model("User", emailSchema)

export default User