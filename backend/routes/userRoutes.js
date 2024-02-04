import express  from "express";
import { LoggedInUser, changePassword, forgetPassword, login, register, resetPassword } from "../controllers/userController.js";
const router = express.Router();



//register
router.route("/register").post(register);

//login
router.route("/login").post(login);

router.route("/single/user").get(LoggedInUser);

//changepassword
router.route("/change-password").put(changePassword);

//forget password
router.route("/forget-password").post(forgetPassword);

//resret pasword
router.route("/forget-password").post(resetPassword);

export default router;