const helper = require('../../helpers/helper')
const blogsModel = require('../blogs/blogs_model')
const commentsModel = require('./comments_model')


module.exports = {
    allComments: (req,res) => {
        const { blogId } = req.params

        commentsModel.findOne({ blog: blogId })
        .populate("comment_user")
        .populate({
            path: "blog",
            populate: {
                path: "blog_user"
            }
        })
        .then((comment) => {
            if(comment) {
                return helper.response(res,200,`All comments for blog ${blogId} is succesfully appeared!`,comment)
            } else {
                return helper.response(res,200,`All comments for blog ${blogId} is empty!`,null)
            }
        })
        .catch((err) => {
            console.log(err)
            return helper.response(res,404,'Bad Request',null)
        })
    },
    createComment: (req,res) => {
        const { commentDescription, blogId } = req.body
        
        blogsModel.findOne({ _id: blogId }).populate("blog_user")
        .then((blog) => {
            if(blog) {
                const newComment = new commentsModel({
                    comment_description: commentDescription,
                    comment_user: req.decodeToken.user_id,
                    blog: blogId
                })

                newComment.save()
                .then((comment) => {

                    $test = blogsModel.findByIdAndUpdate(blogId, 
                    {
                        $push: {
                            comments: comment._id
                        }
                    },
                    {
                        new: true
                    })
                    .then((result) => {
                        return helper.response(res,200,"New comment is succesfully created!",result)
                    })
                    // commentsModel
                    // .populate(newComment,
                    //     { 
                    //         path: "blog", 
                    //         populate: { 
                    //             path: "blog_user"
                    //         } 
                    //     }
                    // )
                    // .then((comment) => {
                    
                    // })
                })
            } else {
                return helper.response(res,400,`Blog ${blogId} is not found. Please try different blog!`,null)
            }
        })
        .catch((err) => {
            console.log(err)
            return helper.response(res,404,'Bad Request',null)
        })
    }
}