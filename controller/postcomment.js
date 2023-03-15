import Comment from "../model/comment.js";

// Create a new comment
// export const createComment = async (req, res) => {
//   try {
//     const comment = new Comment({
//       blog:req.params.blogId,
//       commentBody: req.body.commentBody,
//       name: req.body.name,
//     });
//     await comment.save();
//     res.status(201).json(comment);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
export const createComment = async (req, res) => {
  try {
    const comment = new Comment({
      blog: mongoose.Types.ObjectId(req.params.blogId),
      commentBody: req.body.commentBody,
      name: req.body.name,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





// Get all comments
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single comment by ID
export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a comment by ID
export const deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findOne({ id: req.params.commentId, blog: req.params.blogId, });
    if (!comment) {
      return res.status(404).json(
        {
          data: {
            'status': 'failed',
            'code': 404,
            'message': 'Comment not found'
          }
        }
      );
    };
 const deletedcomment = await Comment.findByIdAndDelete(comment._id);
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Comment deleted successfully',
        data: deletedcomment
      });
      
      
  } catch (err) {
    console.log(err);
  }


  // try {
    
  //   const comment = await Comment.findOne({
  //     _id:req.params.commentId,
  //     blog:req.params.blogId
  //   });
  //   if (!comment) {
  //     return res.status(404).json({ 
        
  //       message: "Comment not found"
  //      });
  
  //   }
  //   await comment.remove();
  //   res.status(200).json({ message: "Comment deleted successfully" });
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
};
