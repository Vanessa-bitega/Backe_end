import express  from "express";

import userController from "../controller/userValidator.js";

const router = express.Router();

 router.post("/user", userController);

export default router;