const helper = require('../../helpers/helper.js')
const blogsModel = require('./blogs_model.js')

module.exports = {
    allBlogs: (req,res) => {
        blogsModel.find({})
        .populate("blog_user")
        .populate({ path: "comments", populate: { path: "comment_user" } })
        .then((blogs) => {
          if(blogs.length > 0) {
            return helper.response(res,200,'All blogs is succesfully appeared',blogs,null)  
          } else {
            return helper.response(res,200,'No blogs in this website!',null,null)
          }
        })
        .catch((err) => {
            console.log(err)
            return helper.response(res,404,'Bad Request',null)
        })
    },
    oneBlog: (req,res) => {
        const { id } = req.params
        blogsModel.findOne({ _id: id }).populate("user")
        .then((blog) => {
            if(blog) {
                return helper.response(res,200,`Blog id ${id} is succesfully appeared!`,blog)
            } else {
                return helper.response(res,400,`Blog id ${id} is not found!`,null)
            }
        })
        .catch((err) => {
            console.log(err)
            return helper.response(res,404,'Bad Request',null)
        })
    },
    createBlog: (req,res) => {
        const { blogTitle, blogDescription, blogTags } = req.body
        const newBlog = new blogsModel({
            blog_title: blogTitle,
            blog_description: blogDescription,
            blog_tags: blogTags,
            blog_user: req.decodeToken.user_id
        })
        newBlog.save()
        .then(()=>{
            blogsModel.populate(newBlog, { path: "blog_user" })
            .then((blog)=>{
                return helper.response(res,200,'A new blog is succesfully created!',blog)
            })
        })
    },
    updateBlog: (req,res) => {
        const { id } = req.params
        const { blogTitle, blogDescription, blogTags } = req.body
        blogsModel.findOne({ _id: id })
        .then((blog) => {
            if(blog) {
                const setData = {
                    blog_title: blogTitle,
                    blog_description: blogDescription,
                    blog_tags: blogTags
                }
                blogsModel.findOneAndUpdate({ _id: id}, setData)
                .then((updatedResult)=>{
                    return helper.response(res, 200, `A blog ${id} is succesfully updated!`,updatedResult,null)
                })
            } else {
                return helper.response(res,400,`Blog id ${id} is not found! Please try again with another id!`,null)
            }
        })
        .catch((err) => {
            console.log(err)
            return helper.response(res,404,'Bad Request',null)
        })
    },
    deleteBlog: (req,res) => {
        const { id } = req.params
        blogsModel.findOne({ _id: id })
        .then((blog) => {
            if(blog) {
                blogsModel.findOneAndRemove({ _id: id })
                .then(() => {
                    return helper.response(res,200,`A blog ${id} is succesfully deleted!`,null)
                })
            } else {
                return helper.response(res,400,`Blog id ${id} is not found! Please try again with another id!`,null)
            }
        })
        .catch((err) => {
            console.log(err)
            return helper.response(res,404,'Bad Request',null)
        })
    }

}