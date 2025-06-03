import jwt from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import userModel from "../models/user.model.js";

export async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    //check for empty ?
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required!",
        status: false,
      });
    }

    //check for validation ?

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY);

    return res.status(200).json({
      user: { name: user.name },
      token,
      status: true,
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      error: error,
      status: false,
    });
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    //check for empty ?
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required!",
        status: false,
      });
    }

    //check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User doesn't exist!",
        status: false,
      });
    }
    //check for validation ?

    //check for correct pass entered by user or not
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong Password",
        status: false,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY);

    return res.status(200).json({
      user: { name: user.name },
      token,
      status: true,
      message: `Welcome back ${user.name}`,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong",
      error: error,
      status: false,
    });
  }
}

export async function userCredits(req, res) {
  try {
    const userId = req.user.id; // middleware will take out user id from token
    const user = await userModel.findById(userId);
    console.log("usercredits", user);

    if (!user) {
      return res.status(400).json({
        message: "User not found!",
        error: error,
        status: false,
      });
    }

    return res.status(200).json({
      credits: user.creditBalance,
      user: { name: user.name },
      status: true,
      // message: `Welcome back ${user.name}`,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Something went wrong1",
      error: error,
      status: false,
    });
  }
}
