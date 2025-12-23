const { User } = require("../models");

/**
 * CREATE USER
 */
exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: "fail",
        message: "Email already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: user,
    });

  } catch (error) {
    next(error);
  }
};


/**
 * GET ALL USERS
 */
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      status: "success",
      results: users.length,
      data: users,
    });

  } catch (error) {
    next(error);
  }
};

/**
 * GET USER BY ID
 */
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: user,
    });

  } catch (error) {
    next(error);
  }
};
