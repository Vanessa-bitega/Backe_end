
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
blog:{
type: mongoose.Schema.Types.ObjectId,
ref:"Blog",
required: true

},
    name:{
        type: String,
        required: true,
    },

  commentBody: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 2000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Comment", commentSchema);