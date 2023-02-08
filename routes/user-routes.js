const express = require("express");
const userController = require("../controllers/user-controller");
const signup = require("../controllers/user-controller");
const router = express.Router();
const auth = require("../middlewares/auth");
//router.METHOD("/url", controller )
console.log(auth);
router.get("/", userController.getAllUser);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/private", auth, (req, res) => {
  res.status(200).send({ messsage: "tienes acceso" });
});
router.get("/:userId", userController.getOneUser);
router.put("/:userId/follow", userController.followUser);
router.delete("/:userId/unfollow", userController.unfollowUser);
module.exports = router;
