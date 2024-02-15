/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearError, createPizza } from "../../../redux/features/adminSlice"
import Spinner from "react-bootstrap/esm/Spinner";

const AddAdminProducts = () => {
  const { loading, error } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //setdefine
  const [addValue, setAddValue] = useState({
    pizzaName: "",
    description: "",
    price: "",
    isInStock: "",
    category: "",
  });

  //destructure
  const {
    pizzaName,
    description,
    price,
    isInStock,
    category,
 
  } = addValue;
  const [pizzaImgReview, setPizzaImgReview] = useState("");
  const [pizzaImg, setPizzaImg] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAddValue({ ...addValue, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if(file){
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = ()=>{
        setPizzaImgReview(reader.result)
        setPizzaImg(file)
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("pizzaName", pizzaName);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("isInStock", isInStock);
    formData.append("pizzaImg", pizzaImg);
    dispatch(createPizza({ formData, toast, navigate }));
   

  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  return (
    <>
      <div className="flex space-x-9 ">
        <Link to="/admin/dashboard">
          <FaArrowLeft />
        </Link>
        <h2 className="text-xl  font-semibold mb-4">Add New Product</h2>
        <h2></h2>
      </div>

      <div className="bg-white p-8 rounded shadow">
        <form onSubmit={handleSubmit} className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="pizzaName"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter product name"
              value={pizzaName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-sm font-medium mb-1">Price</label>
            <input
              type="number"
              name="price"
              step="0.01"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter product price"
              value={price}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              step="0.1"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter product category"
              value={category}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-sm font-medium mb-1">IsInStock</label>
            <input
              type="number"
              name="isInStock"
              step="0.1"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter product isInStock"
              value={isInStock}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-sm font-medium mb-1">pizzaImg</label>
            <input
              type="file"
              accept="image/*"
              name="pizzaImg"
              step="0.1"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter productImg"
              onChange={handleFileChange}
            />
            {pizzaImgReview && (
               <img src={pizzaImgReview} alt="pizzaImg" className="w-64 object-cover" />
            )}
          </div>
          
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter product description"
              value={description}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          {/* Add other fields similar to the ones above */}
          <div className="w-full px-4 mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring"
            >
              {loading && <Spinner animation="border" size="sm" />} Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAdminProducts;
