require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const postsRouter = require("./routes/postsRoutes")
const app = express();

const posts  = require("./data/posts")
app.use(express.json())

const PORT = process.env.PORT || 5003;

//routes
app.use("/api", postsRouter)


//server
app.listen(PORT, () => {
  console.log(`server runinng ok`);
});
