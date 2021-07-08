const express = require("express");
const app = express();
// const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const PostRouter = require("./routes/post");
const CommentRouter = require("./routes/comment");
const userRouter = require("./routes/user");
const likeRouter = require("./routes/like");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts", PostRouter);
app.use("/comments", CommentRouter);
app.use("/auth", userRouter);
app.use("/likes", likeRouter);

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "cruddb",
// });

// db.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("DB connected");
// });

// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM movie_reviews";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });

// app.post("/api/insert", (req, res) => {
//   const movieName = req.body.movieName;
//   const movieReview = req.body.movieReview;
//   const sqlInser =
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
//   db.query(sqlInser, [movieName, movieReview], (err, result) => {
//     console.log(result);
//   });
// });

// app.delete("/api/delete/:movieName", (req, res) => {
//   const name = req.params.movieName;
//   const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";

//   db.query(sqlDelete, name, (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.send("Movie deleted");
//   });
// });

// app.put("/api/update", (req, res) => {
//   const movieName = req.body.movieName;
//   const movieReview = req.body.movieReview;
//   const sqlUpdate =
//     "UPDATE movie_reviews SET movieReview = ? WHERE movieName = ?";

//   db.query(sqlUpdate, [movieReview, movieName], (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     res.send("Movie updated");
//   });
// });

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running....");
  });
});
