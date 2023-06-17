const jwt = require("jsonwebtoken")
const posts = require("../data/posts")

const getPosts = (req, res) => {
  console.log(req.user);
  res
    .status(200)
    .json(posts.filter((posts) => posts.username === req.user.user));
};

const login = (req, res) => {
  const username = req.body.username;
  const user = { user: username };

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "20m" });
  res.json({ accessToken: token });
};

module.exports = {
  getPosts,
  login,
};
