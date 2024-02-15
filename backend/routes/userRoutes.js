import express  from "express";
import { LoggedInUser, changePassword, forgetPassword, login, register, resetPassword, updateProfile } from "../controllers/userController.js";
// import { isAuthenticated } from "../middlewares/auth.js"
import upload from '../file/upload.js';
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();



//register
router.route("/register").post(register);

//login
router.route("/login").post(login);

router.route("/single/user").get(isAuthenticated, LoggedInUser);


//update

router.route("/update/user").put(isAuthenticated, upload.single("avatar"), updateProfile)

//changepassword
router.route("/change-password").put(isAuthenticated, changePassword);

//forget password
router.route("/forget-password").post(forgetPassword);

//resret pasword
router.route("/reset-password").post(resetPassword);

export default router;