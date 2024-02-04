import User from "../models/user.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const register = async (req, res, next) => {
  try {
    //extract user details form the request body (from frontend)
    const { fullName, email, mobileNo, password } = req.body;

    if (!fullName || !email || !mobileNo || !password) {
      return res.status(400).json({
        success: false,
        message: "filled must be filled!",
      });
    }

    //validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid email",
      });
    }

    //check emails if already exits
    const exits = await User.findOne({ email });
    if (exits) {
      return res.status(400).json({
        success: false,
        message: "User already exits",
      });
    }

    //checks mobile number
    const exitsMobo = await User.findOne({ mobileNo });
    if (exitsMobo) {
      return res.status(400).json({
        success: false,
        message: "Mobile number already exits",
      });
    }

    //now create user instance  in db
    const user = await User.create({
      fullName,
      email,
      mobileNo,
      password,
    });

    //now return the user with message
    res.status(201).json({
      success: true,
      message: "User create successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({
    // success: false,
    // message: err.message,
    // });

    next(error);
  }
};

//login
export const login = async (req, res, next) => {
  try {
    //extract user details form the request body
    const { email, password } = req.body;

    //check for empty
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Fields must be filled",
      });
    }

    //validate the email
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide valid email",
      });
    }

    //check for the email in db already exits or not
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Email doesnot exits",
      });
    }

    //check for the password
    // const isMatched = await user.comparePassword(password);
    // if (!isMatched) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid credentials!",
    //   });
    // }

    //generated and get token and check
    //   const token = user.getJwtToken();
    //   res.status(200).json({
    //     success: true,
    //     message: "Login Successful!",
    //     user,
    //     token,
    //   });

    res.status(200).json({
      success: true,
      message: "Login Successful!",
      user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//logged in user(profile/information)
export const LoggedInUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User get successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};



//forget password 
export const forgetPassword = async(req, res, next) => {
  try {

       //extract email from request body
       const { email} = req.body;

       //check for user
       let user = await User.findOne({ email });
       if (!user) {
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
      }

      // //generate a password reset token 
      // const token = jwt.sign({id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

      // //send password reset email
      // const transporter = nodemailer.createTranport({
      //          //baki xa? 
      // });
     
      // await transporter.sendMail({

      // });


      res.status(200).json({
        success: true,
        message: "Password reset email sent  successfully",
        data: user,
      });
    
  } catch (error) {
    console.log(error);
    next(error);
  }
}


//reset password 
export const resetPassword = async (req, res, next) => {
   
  try {
    
  const { token , newPassword } = req.body;

  //verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //check for user
  let user = await User.findById(decoded.id);
  if(!user) { 
    return res.status(400).json({
    success: false,
    message: "User not found",
  });
  }

  
  //lets hash new password 
  // const salt = await bcrypt.genSalt(10);
  // user.password= await bcrypt.hash(newPassword, salt);

  //save to db
  await user.save();

  res.status(200).json({
    success: true,
    message: "Password reset successfully"
   
  });


  } catch (error) {
    console.log(error);
    next(error);
  }
}



//change password
export const changePassword = async (req, res, next) => {
  try {
    //find user id  in db
    const user = await User.findById(req.user.id).select("+password");
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    //after id match extract user details form the request body
    const { oldPassword, newPassword, confirmPassword } = req.body;
    if (!oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Fields must be filled",
      });
    }

    //check o;d password
    const isMatched = await user.comparePassword(oldPassword);
    if (!isMatched) {
      return res.status(400).json({
        success: false,
        message: "Old password is incorrect!",
      });
    }

    //to macth password
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password must be match",
      });
    }

    //to check old password and new password
    if (oldPassword == newPassword) {
      return res.status(400).json({
        success: false,
        message: "Cannot use same password",
      });
    }

    //now user can change password
    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password change successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
