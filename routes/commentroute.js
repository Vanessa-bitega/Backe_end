import express  from "express";
const router = express.Router();
import { createComment, getAllComments, getCommentById, deleteCommentById } from "../controller/postcomment.js";

// POST /blog/:blogId/comments
router.post("/blog/:blogId/comment", createComment);

// GET /blogs/:blogId/comments
router.get("/blog/:blogId/comments", getAllComments);
//get one comment
router.get("/blog/:blogId/comment/:id",getCommentById)

// DELETE /blogs/:blogId/comments/:commentId
router.delete("/blog/:blogId/comment/:id", deleteCommentById);

export default router;