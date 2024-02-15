import React, { useEffect } from "react";
import { FaTrashAlt, } from "react-icons/fa";
import { Link } from "react-router-dom";
import { clearError, pizzaDelete } from "../../../redux/features/adminSlice"

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const ViewTable = ({ item }) => {
    const {error} = useSelector((state)=>state.admin)
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(pizzaDelete({ id, toast }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);

  return (
    <>
      <tr className="bg-white border-b font-medium text-gray-900 dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
        >
          {item.pizzaName}
        </th>
        <td className="px-6 py-4">
          <img
            src={item?.pizzaImg?.url}
            alt={item.pizzaName}
            className="w-24 h-24 object-cover"
          />
        </td>
        <td className="px-6 py-4">{item.category}</td>
        <td className="px-6 py-4">Rs. {item.price}</td>
        <td className="px-6 py-4">
          <div className="flex space-x-2">

            <Link
              className="font-medium text-red-500"
              onClick={() => handleDelete(item._id)}
            >
              <FaTrashAlt />
            </Link>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ViewTable;
