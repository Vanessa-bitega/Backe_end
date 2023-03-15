// const User = require('../models/User');
 import User from "../model/emails.js";
import bcrypt from "bcrypt";

 const login = async (req, res) => {
 // email and password from the body
 const { email, password } = req.body;
 try {
     const user = await User.findOne({ email }).exec();
     if (!user) {
         return res.status(404).json({ 'status': "failed!!", 'code': 404, 'message': "Invalid credentials" });
     } else {
         // check if password is correct
         const passwordMatch = await bcrypt.compare(password, user.password);
         if (!(passwordMatch)) {
             return res.status(400).json({ 'status': "failed!!", 'code': 400, 'message': "Your username or Password is incorrect try again!!" });
         } else {
             // create a JWT and send it back to the client as an HTTP-only cookie
            //  const token = generateToken(user);
            //  res.status(200).json({ token });
             res.status(200).json({ 'status': "success!!", 'code': 200, 'message': "Logged in successfully" });
         }
     }
   
  }catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message
          });

}
}   
export default login