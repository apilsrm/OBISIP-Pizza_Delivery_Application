import React from "react";
import { Link } from "react-router-dom"

const TopPicks = ({ pizza }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 space-y-2 border-solid border-1 bg-gray-50 " >
       {/* <Link to={`/product/details/${pizza._id}`}> */}
       <img
          className="w-full h-32 border-dotted border-black cursor-pointer object-cover rounded-md mb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 sm:mb-4"
          src={pizza?.pizzaImg?.url}
          alt={pizza?.pizzaName}
        />

        <h2 className="text-xl text-gray-500">{pizza?.pizzaName}</h2>
        <p className="text-gray-500"> {pizza?.description}</p>
        <p className="text-gray-500"> {pizza?.category}</p>
        <p className="text-gray-500">Rs. {pizza?.price}</p>
        
    <Link>Add to cart</Link>
       {/* </Link> */}
      </div>
    </>
  )
};

export default TopPicks;
