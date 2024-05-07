const Post = require("../models/postModel");
exports.createPost = async (req,res) => {
    try{
            const {title, body} = req.body;
            const post = new Post({
                title,body,
            });
            const savedPost = await post.save();

            res.json({
                post:savedPost,
            });
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while creating post",
        });
    }
};
exports.updatePost = async (req, res) => {
    try {
        const { postId, title, body } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { title, body },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({
                error: "Post not found",
            });
        }

        res.json({
            message: "Post updated successfully",
            updatedPost,
        });
    } catch (error) {
        return res.status(400).json({
            error: "Cannot update post",
        });
    }
};

exports.getAllPosts = async (req,res) => {
    try {
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })
    }
    catch(error) {
        return res.status(400).json({
            error: "Error while fetching post",
        });
    }
}

exports.deletePost = async (req, res) => {
    try {
        const { _id } = req.body;
        console.log(_id);
        const deletedPost = await Post.findByIdAndDelete(_id);
        console.log(deletedPost);

        if (!deletedPost) {
            return res.status(404).json({
                error: "Post not found",
            });
        }

        res.json({
            message: "Post deleted successfully",
            deletedPost,
        });
    } catch (error) {
        return res.status(400).json({
            error: "Cannot delete post",
        });
    }
};
