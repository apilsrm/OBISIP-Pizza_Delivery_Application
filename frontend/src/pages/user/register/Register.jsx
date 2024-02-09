import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearError, register } from "../../../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Spinners from "../../../components/layout/spinner/Spinners";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    password: "",
    confirmPassword: "",
  });

  const [registerErr, setRegister] = useState({});

  const { fullName, email, mobileNo, password, confirmPassword } = formData;

  //custom error handle

  const validatedForm = () => {
    let newErrors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!fullName) {
      newErrors.fullName = "FullName is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please provide valid email";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be 8 characters long";
    }
    if (!mobileNo) {
      newErrors.mobileNo = "Mobile number is required";
    } else if (mobileNo.length !== 10) {
      newErrors.mobileNo = "Mobile number must be 10 digits long";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = " Confirm password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passowrd must be match";
    }

    setRegister(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatedForm()) {
      dispatch(register({ formData, toast, navigate }));
    } else {
      return toast.warning("invalid data");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={fullName}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-red-500">{registerErr.fullName}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={email}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-red-500">{registerErr.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNo"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="mobileNo"
              name="mobileNo"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={mobileNo}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-red-500">{registerErr.mobileNo}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={password}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-red-500">{registerErr.password}</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              value={confirmPassword}
              onChange={handleChange}
            />
            {registerErr && (
              <span className="text-red-500">{registerErr.confirmPassword}</span>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {loading && <Spinners />}
              Register
            </button>
          </div>
          <span>Already have an account <Link to="/login" className="no-underline"> Login here</Link></span>
        </form>
      </div>
      ;
    </>
  );
};

export default Register;
