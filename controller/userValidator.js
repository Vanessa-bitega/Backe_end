
import bcrypt from "bcrypt";
import User from "../model/emails.js";




const userController = async (req, res) => {
      
  const{ email, password } = req.body;
      // console.log(email, password)
      try {
    

        if(!([email, password])){
           return res.status(400).json({
            message:"invalid email"
           });
        } else{
          
          const samePassword = await bcrypt.hash(password, 10);
          const newUser = await User.create({ email, password:samePassword });
          res.status(200).json({

            "status":"success","code":200,"message":"user created succefully",data:newUser
          })
        }
      }catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message
          });
        }
       
      };

    export default  userController 

// class userController {
//   static async createuser(req, res){
//     try {
//       const {email, password} = req.body;
//       // hash password
//       const hashedPassword = await bcrypt.hash(password, 10);
    
//       // create our new user
//       const newUser = await User.create({  email, password: hashedPassword });
//       res.status(201).json({
//         message: "New User created successfully",
//         data: newUser
//       });
//     } catch (error) {
//       const messageContent = error.message;
//       const status = 500;
//       errorFunc(res, messageContent, status);
//     }

//   }
// }
// export default userController 