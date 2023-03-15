import express from "express";
import blogcontroller from "../controller/blogController.js";

const router = express.Router();

router.post("/blog/Create", blogcontroller);
router.get("/blogs", blogcontroller);
router.get("/blog/:id", blogcontroller);
router.delete("/blog/delete/:id", blogcontroller);
router.put("/blog/update/:id", blogcontroller)

  
export default router;