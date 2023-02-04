const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404), json({ mesage: "No Users Found." });
  }
  return res.status(200).json({ users });
};

const signup = async (req, res, next) => {
  const { name, email, password } = req.body; //frontend
  // existing user valida usuarios
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User already exist! Login instead.." });
  }
  //encrypted password
  // const hashedPassword = bcryptjs.hashSync(password);

  const user = new User({
    name,
    email,
    password,
    // password: hashedPassword,
  });
  try {
    user.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};

module.exports = getAllUser;
module.exports = signup;
