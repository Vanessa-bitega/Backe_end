
 import Blog from "../model/Blog.js";
import errorFunc from "../utils/errorFunc.js";

async function blogcontroller(req, res) {
  try {
    const { method } = req;

    if (method === 'POST') {
      const { title, body } = req.body;
      const newBlog = await Blog.create( {title, body} );
        res.status(201).json({
        message: 'New blog created successfully',
        data: newBlog,
      });
    } else if (method === 'GET') {
      const { id } = req.params;
      if (id) {
        const blog = await Blog.findOne({ _id: id });
        if (!blog) {
          return res.status(404).json({
            message: `blog with id: ${id} was not found`,
          });
        } else {
          return res.status(200).json({
            data: blog,
          });
        }
      } else {
        const blogs = await Blog.find();
        res.status(200).json({
          data: blogs,
        });
      }
    } else if (method === 'PUT') {
      const { id } = req.params;
      const { title, body } = req.body;
      const blogToUpdate = await Blog.findByIdAndUpdate(id, {
        title,
        body,
      });
      if (!blogToUpdate) {
        return res.status(404).json({
          message: `blog with id: ${id} was not found`,
        });
      } else {
        return res.status(200).json({
          message: `updated successfully`,
          data: blogToUpdate,
        });
      }
    } else if (method === 'DELETE') {
      const { id } = req.params;
      const blogToDelete = await Blog.findByIdAndDelete(id);
      if (!blogToDelete) {
        return res.status(404).json({
          message: `blog with id: ${id} was not found`,
        });
      } else {
        return res.status(200).json({
          message: `deleted successfully`,
        });
      }
    } else {
      res.status(400).json({
        message: 'Invalid request method',
      });
    }
  } catch (error) {
    console.log(error.message);
    const messageContent = error.message;
    const status = 500;
    errorFunc(res, messageContent, status);
  }
}

export default blogcontroller 




































// import Blog from "../model/Blog.js";
// import errorFunc from "../utils/errorFunc.js";



// class blogcontroller {
//     static async createBlog(req, res) {
//       console.log(req)
//       try {
        
//         const { title, snippet, body } = req.body;
//         const newBlog = await Blog.create({ title, snippet, body });
//         res.status(201).json({
//           message: "New blog created successfully",
//           data: newBlog
//         });
//       } catch (error) {
//         const messageContent = error.message;
//         const status = 500;
//         errorFunc(res, messageContent, status);
//       }
  
//       }

    
// static async getblogs(req,res){
//  try {
//   const blogs= await Blog.find();
//   res.status (200).json({
//     data:blogs
//   });
  
//  } catch (error) {
//   const messageContent = error.message;
//           const status = 500;
//           errorFunc(res, messageContent, status);
//  }
// }
// static async getblog(req, res){
//   try {
//     const { id } = req.params;
//     const blog = await Blog.findOne({_id: id});
//     if (!blog ){
//       return res.status(404).json({
//         message:`blog with id: ${id} was not found`
//       })
      
//     }else{
//       return res.status(200).json({
//         data:blog
//       })
//     }
  
//   } catch (error) {
//     console.log(error.message);
//     const messageContent = error.message;
//           const status = 500;
//           errorFunc(res, messageContent, status);
//  }
//   }
//   static async deleteblog(req,res){
//     try {
//       const { id } = req.params;
//       const _id = id 
//       const blogToDelete = await Blog.findByIdAndDelete(_id)
//       if (!blogToDelete){
//         return res.status(404).json({
//           message:`blog with id: ${id} was not found`
//         })
//       }else{
//         return  res.status(200).json({
//           message: `deleted successsfully`
//         })
//       }
//     } catch (error) {
//       console.log(error.message);
//       const messageContent = error.message;
//             const status = 500;
//             errorFunc(res, messageContent, status);
//    }
//     }

//     static async updateblog (req, res){
//       try {
//         const { id } = req.params;
//         const { title, snippet, body } = req.body
//         const _id = id 
//         const blogToUpdate = await Blog.findByIdAndUpdate(_id, { title, snippet, body })
//          if (!blogToUpdate){
//           return res.status(404).json({
//             message:`blog with id: ${id} was not found`
//           })
//          }else{
//           return  res.status(200).json({
//             message: `updated successsfully`,
//             data:blogToUpdate
//           })
//          }
//       } catch (error) {
//         console.log(error.message);
//         const messageContent = error.message;
//               const status = 500;
//               errorFunc(res, messageContent, status);
//      }
//       }
//     }
    
  
// export default blogcontroller;