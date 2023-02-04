const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const feedRoutes = require("./routes/feed-routes");
const userRoutes = require("./routes/user-routes");

// require("./lib/connectMongoose");

const app = express();

app.use(bodyParser.json());

// middleware para que apps en diferentes puertos (front y back) puedan comunicarse
app.use((req, res, next) => {
  // permite el acceso a la API desde fuera a todas las rutas (*)
  res.setHeader("Access-Control-Allow-Origin", "*");
  // permite a los accesos externos acceder a diferentes métodos
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  // permite el acceso a algunos headers
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// registramos la ruta para poder usarla con peticiones que empiecen por /feed
app.use("/feed", feedRoutes);
app.use("/user", userRoutes);

// esto es solo para quitar un warning que daba mongoose
mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://admin:qmhx2hwedvyVSs1a@cluster0.orlgros.mongodb.net/Flitter?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() =>
    console.log(" Connected to Database and Listening on Localhost 3000")
  )
  .catch((err) => console.log(err));
