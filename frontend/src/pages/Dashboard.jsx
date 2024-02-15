
// import {BsThreeDotsVertical} from "react-icons/bs"

import BannerPage from "../components/home/banner/BannerPage";
import TopPicks from "./topics/TopPicks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPizzas } from "../redux/features/pizzaSlice";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { pizzas, loading, error } = useSelector((state) => state.pizza);
  console.log(pizzas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <>
      <div className="font-sans">
        <BannerPage />
      </div>
       <div className="mx-auto">
        <Link to="/customPizza" className="no-underline bg-yellow-400 hover:bg-orange-500 px-6 py-3 rounded-md mt-2">
        CustomPizzaPage
        </Link>
       </div>

      <div className="container mx-auto py-8">
        {loading ? (

            <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}>
              <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
            </div>
          
          
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pizzas?.map((pizza) => (
              <TopPicks key={pizza._id} pizza={pizza} />
            ))}{" "}
          </div>
        )}
      </div>
    </>
  );
};
export default Dashboard;
