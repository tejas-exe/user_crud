const userSchema = require("../models/userSchema");

exports.createUser = async (req, res) => {
  try {
    const { name, email, mobile, dateOfBirth } = req.body;

    const newUser = new userSchema({ email, name, mobile, dateOfBirth });
    const savedUser = await newUser.save();
    return res.status(201).json({ status: true, data: savedUser });
  } catch (error) {
    res.status(500).json({ status: false, data: error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUsr = await userSchema.deleteOne({ _id: id });
    return res.status(201).json({ status: true, data: deletedUsr });
  } catch (error) {
    res.status(500).json({ status: false, data: error });
  }
};

exports.fetchUser = async (req, res) => {
  try {
    const users = await userSchema.find({});
    return res.status(201).json({ status: true, data: users });
  } catch (error) {
    res.status(500).json({ status: false, data: error });
  }
};

exports.editUser = async (req, res) => {
  try {
    const { name, email, mobile, dateOfBirth } = req.body;
    const id = req.params.id;
    const updatedUser = await userSchema.findByIdAndUpdate(
      id,
      {
        name,
        email,
        mobile,
        dateOfBirth,
      },
      {
        runValidators: true,
        new: true,
      }
    );
    return res.status(201).json({ status: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ status: false, data: error });
  }
};
