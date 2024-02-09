import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { changePassword, clearError } from "../../../redux/features/authSlice";
import Spinner from "react-bootstrap/esm/Spinner";


const ChangePassword = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changeValue, setChangeValue] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [changeErr, setChangeErr] = useState({});

  const { oldPassword, newPassword, confirmPassword } = changeValue;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setChangeValue({ ...changeValue, [name]: value });
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError())
    }
  }, [dispatch, error]);

  const validatedForm = () => {
    let newErrors = {};
    if (!oldPassword) {
      newErrors.oldPassword = "Password is required";
    }

    if (!newPassword) {
      newErrors.newPassword = "Password is required";
    } else if (newPassword.length < 8) {
      newErrors.newPassword = "Password must be 8 characters long";
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = " Confirm password is required";
    } else if (confirmPassword < 8) {
      newErrors.confirmPassword = "Passowrd must be match";
    }

    setChangeErr(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validatedForm()) {
      dispatch(changePassword({ changeValue, toast, navigate }));
    } else {
      return toast.warning("invalid data");
    }
  };
  return (
    <>
      <div className=" font-sans max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleChange}
            />
            {changeErr && (
              <span className="text-red-500">{changeErr.oldPassword}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleChange}
            />
            {changeErr && (
              <span className="text-red-500">{changeErr.oldPassword}</span>
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
              onChange={handleChange}
            />
            {changeErr && (
              <span className="text-red-500">{changeErr.confirmPassword}</span>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              
              {loading && <Spinner />}
              Save

            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
