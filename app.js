import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import blogroute from "./routes/blogroute.js";
 import User from "./routes/User.js";
import commentroute from "./routes/commentroute.js";
import loginroute from "./routes/loginroute.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define a home route
app.get("/", (req, res) => {
    res.status(200).send(``);
   
});
 
// Connect to MongoDB database
mongoose.set('strictQuery', false); // Allow for more flexible queries
let con = null;
if (process.env.NODE_ENV === "test") {
    con = mongoose.connect(process.env.MONGODB_URL_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} else {
    con = mongoose.connect(process.env.MONGODB_URL_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
if (con) {
    console.log('Database has been connected')
}
app.use("/api", blogroute)
  app.use("/api", User)
 app.use("/api", commentroute)
 app.use("/api", loginroute)
export default app;