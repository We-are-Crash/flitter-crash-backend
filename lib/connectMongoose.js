// "strict";
// const mongoose = require("mongoose");
// const conn = mongoose.connection;

// conn.on("error", (err) => {
//   console.error("mongodb connection error", err);
//   process.exit(1);
// });

// conn.once("open", () => {
//   console.log("Connected to mongodb.", mongoose.connection.name);
// });

// mongoose.set("strictQuery", false);

// mongoose
//   .connect(
//     "mongodb+srv://admin:qmhx2hwedvyVSs1a@cluster0.orlgros.mongodb.net/Flitter?retryWrites=true&w=majority"
//   )
//   .then(() => app.listen(3000))
//   .then(() =>
//     console.log(" Connected to Database and Listening on Localhost 3000")
//   )
//   .catch((err) => console.log(err));

// module.exports = conn;
