const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Comment = require("../models/comment");
const auth = require("../middleware/auth");

router.post("/create", auth, async (req, res) => {
  try {
    const { title, content, hashtags } = req.body;
    const newPost = new Post({
      title,
      content,
      hashtags,
      user: req.user.id,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500);
  }
});

router.post("/:postId/comment", auth, async (req, res) => {
  try {
    const { content, name, email } = req.body;
    const post = await Post.findById(req.params.postId);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    const newComment = new Comment({
      content,
      user: req.user.id,
      post: req.params.postId,
      name,
      email,
    });

    await newComment.save();
    post.comments.push(newComment._id);
    await post.save();

    res.status(201).json(newComment);
  } catch (err) {
    res.status(500);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "email")
      .populate("comments");
    res.json(posts);
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
