const User = require("../models/userModel");







exports.register = async (req, res) => {
  try {
    const { firstName, lastName, age, profession } =
      req.body;
    // form validation server side
    if (
      !(firstName && lastName && profession && age)
    ) {
      return res.status(400).send("all input are required");
    }

    
    // saving our new created instance
    const savedUser = await User.create({
      firstName,
      lastName,
        age,
      profession,
    });

    res.status(201).send(savedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};




exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ message: "Users list retrieved", data: users });
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};



exports.updateOneUser = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(200).json({ message: "User updateed", data: user });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteOneUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).send("User deleted");
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};
