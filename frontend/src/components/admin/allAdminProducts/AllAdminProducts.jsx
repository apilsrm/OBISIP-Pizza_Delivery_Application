/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { clearError, pizzasAdmin } from "../../../redux/features/adminSlice"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import ViewTable from "./ViewTable";
import Spinner from "react-bootstrap/esm/Spinner";
import { Link } from "react-router-dom";




const AllAdminProducts = () => {
  const { loading, error, adminPizzas } = useSelector((state) => state.admin);
  console.log(adminPizzas);


  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    dispatch(pizzasAdmin());
  }, [dispatch, error]);

  return (
    <>
      <div className="flex justify-between items-center my-4 ">
        <h2>View All Product</h2>
        <Link to="/add/admin/pizza">
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Add Product</button>
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" w-full text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">
                PRODUCTNAME
              </th>
              <th scope="col" className="px-6 py-3">
                PRODUCTIMAGE
              </th>
              <th scope="col" className="px-6 py-3">
                CATEGORY
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>

              
              <th scope="col" className="px-6 py-3">
                ISINSTOCK
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
            <tr>
                <td colSpan='9' className="flex text-center">
                    <Spinner animation="border" size="sm" />

                </td>
            </tr>): (adminPizzas && adminPizzas.map((item) => (
                <ViewTable key={item._id} item={item} />
            ) )) }
            
           
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllAdminProducts;
