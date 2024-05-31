
const bcrypt =require('bcrypt')
const jwt =require('jsonwebtoken')
const dotenv = require("dotenv");
const User = require('../Model/LoginModel/LoginModel');
const UserSession = require('../Model/LoginModel/UserSession');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;



const signUp = async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        phone_number,
        usertype,
        gender,
        dob,
      } = req.body;
     
  
      const existingUser = await User.findOne({ email });
      const WithSameNumber =await User.findOne({phone_number});
      if (existingUser) {
        return res
          .status(400)
          .json({ message: `${email} is already registered ` });
      }
      if(WithSameNumber){
        return res
          .status(400)
          .json({ message: `${phone_number} is already registered` });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        email,
        password: hashedPassword,
        name,
        phone_number,
        gender,
        dob,
        usertype
      });
      await newUser.save();
  
      const newUserSession = new UserSession({
        userId: newUser._id,
        startTime: new Date(),
        endTime: null,
      });
      await newUserSession.save();
  
      const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, {
        expiresIn: "2d",
      });
  
      return res.status(201).json({
        message: `${name} your account is created successfully`,
        token,
        name,
        email,
        usertype
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  const login = async (req, res) => {

    try {

      const { email, password } = req.body;
  // console.log(email);
      const user = await User.findOne({ email });
  // console.log(user);
      if (!user) {
        return res.status(404).json({ message: "No User Found" });
      }
  
      const comparePassword = await bcrypt.compare(password, user.password);
  
      if (!comparePassword) {
        return res.status(401).json({ message: "Authentication failed" });
      }
  
      const name = user.name;
  
      let userSession = await UserSession.findOne({
        userId: user._id,
        endTime: null,
      });
      if (!userSession) {
        userSession = new UserSession({
          userId: user._id,
          startTime: new Date(),
          endTime: null,
        });
      } else {
        userSession.startTime = new Date();
      }
  
      await userSession.save();
  
      const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
        expiresIn: "2d",
      });
      return res.status(200).json({
        message: `${name} you have successfully logged In`,
        token,
        user
      });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  const logout = async (req, res) => {
    try {
      const { email } = req.query;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Update the endTime of the active session for the user
      const session = await UserSession.findOneAndUpdate(
        { userId: user._id, endTime: null },
        { endTime: new Date() },
        { new: true }
      );
  
      if (!session) {
        return res.status(404).json({ message: "Active session not found" });
      }
  
      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  
   module.exports={signUp,login,logout}