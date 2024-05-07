const express = require("express");
const router = express.Router();
const { dummyLink, likePost, unlikePost } = require("../controllers/LikeController");
const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts,deletePost,updatePost} = require("../controllers/postController");
router.get("/dummyroute", dummyLink);
router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);
router.delete("/posts/delete",deletePost);
router.post("/posts/update", updatePost);

module.exports = router;
