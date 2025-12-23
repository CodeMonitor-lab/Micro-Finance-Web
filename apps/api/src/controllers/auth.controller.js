const { User } = require("../models");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password, // hashing will be added later
      role,
    });

    res.status(201).json({
      status: "success",
      data: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }

    // password comparison will be added later
    if (password !== user.password) {
      return res.status(401).json({
        status: "fail",
        message: "Invalid credentials",
      });
    }

    res.json({
      status: "success",
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};
