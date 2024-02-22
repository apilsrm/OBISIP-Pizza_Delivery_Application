    import { useEffect, useState } from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { toast } from "react-toastify";
    import { clearError, resetPassword } from "../../../redux/features/authSlice";
    import { useNavigate } from "react-router-dom";
    import Spinners from "../../../components/layout/spinner/Spinners";
    
    const ResetPassword = () => {
      const { loading, error } = useSelector((state) => state.auth);
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
  const [changeValue, setChangeValue] = useState({
        password: "",
        confirmPassword: "",
      });
    
      const [resetPassErr, setResetPassErr] = useState({});
    
      const { password, confirmPassword } = changeValue;
    
      //custom error handle
    
      const validatedForm = () => {
        let newErrors = {};
        if (!password) {
          newErrors.password = "Password is required";
        } else if (password.length < 8) {
          newErrors.password = "Password must be 8 characters long";
        }
        if (!confirmPassword) {
          newErrors.confirmPassword = " Confirm password is required";
        } else if (confirmPassword !== password) {
          newErrors.confirmPassword = "Passowrd must be match";
        }
    
        setResetPassErr(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const handleChange = (e) => {
        let { name, value } = e.target;
        setChangeValue({ ...changeValue, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        if (validatedForm()) {
          dispatch(resetPassword({ changeValue, toast, navigate }));
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
                {resetPassErr && (
                  <span className="text-red-500">{resetPassErr.password}</span>
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
                {resetPassErr && (
                  <span className="text-red-500">
                    {resetPassErr.confirmPassword}
                  </span>
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

            </form>
          </div>
          ;
        </>
      );
    };
    
    export default ResetPassword;
    