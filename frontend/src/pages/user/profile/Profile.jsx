import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  profile,
  profileUpdate,
} from "../../../redux/features/authSlice";
import { toast } from "react-toastify";
import { useRef } from "react";
import Loader from "../../../components/layout/loader/Loader";
import { useState } from "react";
import Spinners from "../../../components/layout/spinner/Spinners";

const Profile = () => {
  const { user, loading, isLoading, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const shownToasstOnce = useRef(false);

  const [updateValue, setUpdateValue] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    role: "",
  });
  const [avatarPreview, setAvataPreview] = useState("");
  const [avatar, setAvatar] = useState("");

  const { fullName } = updateValue;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setAvataPreview(reader.result);
        setAvatar(file);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* bainary pani send ---multipart form data*/

    const updateForm = new FormData();
    updateForm.append("fullName", fullName);
    updateForm.append("avatar", avatar);

    dispatch(profileUpdate({ updateForm, toast }));
  };

  useEffect(() => {
    if (user) {
      setUpdateValue({ fullName: user.fullName || "" });

      setAvataPreview(user?.avatar?.url || "");
    }
  }, [user]);

  useEffect(() => {
    if (error && !shownToasstOnce.current) {
      toast.error(error);
      dispatch(clearError());
      shownToasstOnce.current = true;
    }

    dispatch(profile());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md my-2">
          <h2 className="text-2xl font-semibold mb-4">Information</h2>
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
                value={user.email}
                disabled
              />
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
                value={user.mobileNo}
                disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNo"
                className="block text-sm font-medium text-gray-700"
              >
                User Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                value={user.role}
                disabled
              />
            </div>

            <div className="bg-orange-100">
              <label>Select Image</label>
              <img
                src={avatarPreview}
                alt="avatarImg"
                className="w-32 h-32 object-cover"
              />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {isLoading && <Spinners />} Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
