// import React, { useState } from "react";
// import BaseSelector from "./BaseSelector";
// import SauceSelector from "./SauceSelector";
// import CheeseSelector from "./CheeseSelector";
// import VeggiesSelector from "./VeggiesSelector";
// import MeatSelector from "./MeatSelector";
// import SizeSelector from "./SizeSelector";
// import { Link } from "react-router-dom";
// import prices from "./data"; // Import prices from data.js

// const CustomPizzaPage = () => {
//   const [selectedOptions, setSelectedOptions] = useState({
//     base: null,
//     sauce: null,
//     cheese: null,
//     veggies: [],
//     meat: [],
//     size: null,
//     quantity: 1,
//     pizzaName: "",
//   });

//   const [currentStep, setCurrentStep] = useState(0);
//   const [showStartButton, setShowStartButton] = useState(true);
//   const [showQuestion, setShowQuestion] = useState(false);
//   const [isVegetarian, setIsVegetarian] = useState(false);

//   const handleOptionChange = (optionType, optionValue) => {
//     if (optionType === "pizzaName") {
//       setSelectedOptions((prevOptions) => ({
//         ...prevOptions,
//         pizzaName: optionValue,
//       }));
//     } else if (optionType === "quantity") {
//       setSelectedOptions((prevOptions) => ({
//         ...prevOptions,
//         quantity: optionValue,
//       }));
//       setCurrentStep(currentStep + 1);
//     } else if (optionType === "veggies" || optionType === "meat") {
//       // Ensure optionValue is always an array
//       const newValue = Array.isArray(optionValue) ? optionValue : [optionValue];
//       setSelectedOptions((prevOptions) => ({
//         ...prevOptions,
//         [optionType]: newValue,
//       }));
//       setCurrentStep(currentStep + 2);
//     } else {
//       setSelectedOptions((prevOptions) => ({
//         ...prevOptions,
//         [optionType]: optionValue,
//       }));
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleQuestionResponse = (isVeg) => {
//     setIsVegetarian(isVeg);
//     setCurrentStep(1);
//     setShowQuestion(false);
//   };

//   const handleStartButtonClick = () => {
//     setShowStartButton(false); // Hide the "Start" button once clicked
//     setShowQuestion(true); // Show the question after the "Start" button is clicked
//   };

//   const isFormIncomplete = () => {
//     return Object.values(selectedOptions).some(
//       (value) =>
//         value === null ||
//         value === "" ||
//         (Array.isArray(value) && value.length === 0)
//     );
//   };

//   const calculateTotalPrice = () => {
//     let totalPrice = 0;

//     // Calculate total price based on selected options and prices from data.js
//     totalPrice += prices.base[selectedOptions.base];
//     totalPrice += prices.sauce[selectedOptions.sauce];
//     totalPrice += prices.cheese[selectedOptions.cheese];

//     // Calculate total price for veggies
//     totalPrice += selectedOptions.veggies.reduce(
//       (acc, veggie) => acc + prices.veggies[veggie],
//       0
//     );

//     // Calculate total price for meat
//     totalPrice += selectedOptions.meat.reduce(
//       (acc, meat) => acc + prices.meat[meat],
//       0
//     );

//     totalPrice += prices.size[selectedOptions.size];

//     totalPrice *= selectedOptions.quantity;

//     return totalPrice;
//   };

//   const handleDoneButtonClick = () => {
//     if (isFormIncomplete()) {
//       alert("Please fill out all fields before proceeding.");
//       return;
//     }
//   };

//   return (
//     <div className="container flex flex-col lg:flex-row gap-4 mx-auto px-4 py-8">
//       <div className="flex-auto bg-red-400 rounded-lg p-6">
//         <h1 className="text-3xl font-bold mb-4">Customize Your Pizza</h1>
//         {showStartButton && (
//           <button
//             onClick={handleStartButtonClick}
//             className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md mb-4"
//           >
//             Start
//           </button>
//         )}
//         {showQuestion && (
//           <div>
//             <p className="text-black font-semibold mt-2 text-lg">
//               Are you vegetarian or non-vegetarian?
//             </p>
//             <button
//               onClick={() => handleQuestionResponse(true)}
//               className="bg-yellow-400 hover:bg-green-500 px-6 py-3 rounded-md mt-2 mr-2"
//             >
//               Vegetarian
//             </button>
//             <button
//               onClick={() => handleQuestionResponse(false)}
//               className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-md mt-2"
//             >
//               Non-Vegetarian
//             </button>
//           </div>
//         )}
//         <div className="space-y-4">
//           {currentStep >= 1 && (
//             <BaseSelector
//               onChange={(value) => handleOptionChange("base", value)}
//             />
//           )}
//           {currentStep >= 2 && (
//             <SauceSelector
//               onChange={(value) => handleOptionChange("sauce", value)}
//             />
//           )}
//           {currentStep >= 3 && (
//             <CheeseSelector
//               onChange={(value) => handleOptionChange("cheese", value)}
//             />
//           )}
//           {currentStep >= 4 && (
//             <VeggiesSelector
//               onChange={(value) => handleOptionChange("veggies", value)}
//             />
//           )}
//           {!isVegetarian && currentStep >= 5 && (
//             <MeatSelector
//               onChange={(value) => handleOptionChange("meat", value)}
//             />
//           )}
//           {currentStep >= 6 && (
//             <SizeSelector
//               onChange={(value) => handleOptionChange("size", value)}
//             />
//           )}
//           {currentStep >= 7 && (
//             <div>
//               <input
//                 type="number"
//                 placeholder="Enter Quantity"
//                 value={selectedOptions.quantity}
//                 onChange={(e) =>
//                   handleOptionChange("quantity", parseInt(e.target.value))
//                 }
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Enter Pizza Name"
//                 value={selectedOptions.pizzaName}
//                 onChange={(e) =>
//                   handleOptionChange("pizzaName", e.target.value)
//                 }
//                 className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mt-4"
//               />
//             </div>
//           )}
//         </div>
//         {currentStep >= 7 && (
//           <button
//             onClick={handleDoneButtonClick}
//             disabled={isFormIncomplete()}
//             className="bg-green-500 text-white px-6 py-3 rounded-md mt-8"
//           >
//             Done
//           </button>
//         )}
//       </div>
//       <div className="flex-auto bg-green-500 rounded-lg p-6">
//         <h2 className="text-lg font-semibold">{selectedOptions.pizzaName}</h2>
//         {/* Display other selected options */}
//         {currentStep >= 1 && <p>Selected Base: {selectedOptions.base}</p>}
//         {currentStep >= 2 && <p>Selected Sauce: {selectedOptions.sauce}</p>}
//         {currentStep >= 3 && <p>Selected Cheese: {selectedOptions.cheese}</p>}
//         {currentStep >= 4 && (
//           <p>Selected Veggies: {selectedOptions.veggies.join(", ")}</p>
//         )}
//         {!isVegetarian && currentStep >= 5 && (
//           <p>Selected Meat: {selectedOptions.meat.join(", ")}</p>
//         )}
//         {currentStep >= 6 && <p>Selected Size: {selectedOptions.size}</p>}
//         {currentStep >= 7 && <p>Total Price: ${calculateTotalPrice()}</p>}
//         {/* Add buttons for Payment and Edit */}
//         <div className="flex justify-between mt-4">
//           {/* Link back to Dashboard */}
//           <Link
//             to="/dashboard"
//             className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//           >
//             Done
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomPizzaPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BaseSelector from "./BaseSelector";
import SauceSelector from "./SauceSelector";
import CheeseSelector from "./CheeseSelector";
import VeggiesSelector from "./VeggiesSelector";
import MeatSelector from "./MeatSelector";
import SizeSelector from "./SizeSelector";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import prices from "./data"; // Import prices from data.js
import { clearError, createCPizza } from "../../redux/features/pizzaSlice";
import Spinner from "react-bootstrap/esm/Spinner";


const CustomPizzaPage = () => {
  const { loading, error } = useSelector((state) => state.pizza);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedOptions, setSelectedOptions] = useState({
    base: null,
    sauce: null,
    cheese: null,
    veggies: null, // Change to single selection
    meat: null, // Change to single selection
    size: null,
    quantity: 1,
    pizzaName: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showStartButton, setShowStartButton] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const handleOptionChange = (optionType, optionValue) => {
    if (optionType === "pizzaName") {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        pizzaName: optionValue,
      }));
    } else if (optionType === "quantity") {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        quantity: optionValue,
      }));
      setCurrentStep(currentStep + 1);
    } else if (optionType === "veggies") {
      // Handle veggies selection
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        veggies: optionValue,
        meat: null, // Reset meat selection for vegetarians
      }));
      setCurrentStep(currentStep + 2);
    } else {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [optionType]: optionValue,
      }));
      setCurrentStep(currentStep + 1);
    }
  };

  const handleQuestionResponse = (isVeg) => {
    setIsVegetarian(isVeg);
    setCurrentStep(1);
    setShowQuestion(false);
  };

  const handleStartButtonClick = () => {
    setShowStartButton(false); // Hide the "Start" button once clicked
    setShowQuestion(true); // Show the question after the "Start" button is clicked
  };

  
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Calculate total price based on selected options and prices from data.js
    totalPrice += prices.base[selectedOptions.base];
    totalPrice += prices.sauce[selectedOptions.sauce];
    totalPrice += prices.cheese[selectedOptions.cheese];
    totalPrice += prices.veggies[selectedOptions.veggies]; // Use single selection
    if (!isVegetarian) {
      totalPrice += prices.meat[selectedOptions.meat]; // Use single selection for non-vegetarians
    }
    totalPrice += prices.size[selectedOptions.size];
    
    totalPrice *= selectedOptions.quantity;

    return totalPrice;
  };
  
 

  // const isFormIncomplete = () => {
  //   if(selectedOptions.pizzaName ===""){
  //   return true;}

  //   else return false;

  // };

  const isFormIncomplete = () => {
    return selectedOptions.pizzaName === "";
  };
  
  // const handleDoneButtonClick = () => {
  //   if (isFormIncomplete ==) {
  //     alert("Please fill out all fields before proceeding.");
    
  //   return
  //   }
  // };

  const handleDoneButtonClick = (e) => {
    if (isFormIncomplete()) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    e.preventDefault();
    

    const cformData =  {
    user: selectedOptions.pizzaName,
      base: selectedOptions.base,
      sauce: selectedOptions.sauce,
      cheese: selectedOptions.cheese,
      veggies: selectedOptions.veggies,
      meat: selectedOptions.meat,
      size: selectedOptions.size,
      quantity: selectedOptions.quantity,
      pizzaName: selectedOptions.pizzaName,
      totalPrice: calculateTotalPrice(),
      // Include any other necessary data
  };
  dispatch(createCPizza({ cformData, toast, navigate }));

  console.log(cformData);
  


    // const cformData = new FormData();
    // cformData.append("pizzaName", selectedOptions.pizzaName);
    // cformData.append("base", selectedOptions.base);
    // cformData.append("sauce", selectedOptions.sauce);
    // cformData.append("cheese", selectedOptions.cheese);
    // cformData.append("veggies", selectedOptions.veggies);
    // cformData.append("meat", selectedOptions.meat);
    // cformData.append("size", selectedOptions.size);
    // cformData.append("totalPrice", calculateTotalPrice());
    // cformData.append("quantity", selectedOptions.quantity);
    // dispatch(createCPizza({ cformData, toast, navigate }));

    // console.log(cformData)
    // window.location.href = "/orders";
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error]);
  


  
   









  const isPizzaNameFilled = () => {
    return selectedOptions.pizzaName.trim() !== "";
  };

  return (
    <div className="container flex flex-col sm:flex-col-reverse lg:flex-row gap-4 mx-auto px-4 py-8">
      <div className="flex-auto bg-gray-200  rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">Customize Your Pizza</h1>
        {showStartButton && (
          <button
            onClick={handleStartButtonClick}
            className="inline-block py-2 px-4 text-white bg-yellow-400 hover:bg-orange-600 rounded-lg text-decoration-none"
          >
            Start
          </button>
        )}
        {showQuestion && (
          <div>
            <p className="text-black font-semibold mt-2 text-lg">
              Are you vegetarian or non-vegetarian?
            </p>
            <button
              onClick={() => handleQuestionResponse(true)}
              className="bg-yellow-400 hover:bg-green-500 px-6 py-3 rounded-md mt-2 mr-2"
            >
              Vegetarian
            </button>
            <button
              onClick={() => handleQuestionResponse(false)}
              className="bg-yellow-400 hover:bg-orange-500 px-6 py-3 rounded-md mt-2"
            >
              Non-Vegetarian
            </button>
          </div>
        )}
        <div className="space-y-4">
          {currentStep >= 1 && (
            <BaseSelector
              onChange={(value) => handleOptionChange("base", value)}
            />
          )}
          {currentStep >= 2 && (
            <SauceSelector
              onChange={(value) => handleOptionChange("sauce", value)}
            />
          )}
          {currentStep >= 3 && (
            <CheeseSelector
              onChange={(value) => handleOptionChange("cheese", value)}
            />
          )}
          {currentStep >= 4 && (
            <VeggiesSelector
              onChange={(value) => handleOptionChange("veggies", value)}
            />
          )}
          {!isVegetarian && currentStep >= 5 && (
            <MeatSelector
              onChange={(value) => handleOptionChange("meat", value)}
            />
          )}
          {currentStep >= 6 && (
            <SizeSelector
              onChange={(value) => handleOptionChange("size", value)}
            />
          )}
          {currentStep >= 7 && (
            <div>
              <input
                type="number"
                placeholder="Enter Quantity"
                value={selectedOptions.quantity}
                onChange={(e) =>
                  handleOptionChange("quantity", parseInt(e.target.value))
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Enter Pizza Name"
                value={selectedOptions.pizzaName}
                onChange={(e) =>
                  handleOptionChange("pizzaName", e.target.value)
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mt-4"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex-auto bg-gray-200  rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-4">Your Pizza Details</h1>

      {currentStep >= 7 &&  <h2 className="text-lg font-semibold mb-2">Pizza Name: {selectedOptions.pizzaName}</h2> }
        {/* Display other selected options */}
        {currentStep >= 1 && <p className="w-auto text-black text-lg bg-gray-100 rounded-md p-4 mb-2 shadow-md">Selected Base: {selectedOptions.base}</p>}
        {currentStep >= 2 && <p className="w-auto bg-gray-100  text-lg rounded-md p-4 mb-2 shadow-md">Selected Sauce: {selectedOptions.sauce}</p>}
        {currentStep >= 3 && <p className="w-auto bg-gray-100 text-lg rounded-md p-4 mb-2 shadow-md">Selected Cheese: {selectedOptions.cheese}</p>}
        {currentStep >= 4 && <p className="w-auto bg-gray-100 text-lg rounded-md p-4 mb-2 shadow-md">Selected Veggies: {selectedOptions.veggies}</p>}
        {!isVegetarian && currentStep >= 5 && (
          <p className="w-auto bg-gray-100 rounded-md p-4 mb-2 shadow-md">Selected Meat: {selectedOptions.meat}</p>
        )}
        {currentStep >= 6 && <p className="w-auto bg-gray-100 text-lg rounded-md p-4 mb-2 shadow-md">Selected Size: {selectedOptions.size}</p>}
        {currentStep >= 7 && <p className="w-auto bg-gray-100 text-lg rounded-md p-4 mb-2 shadow-md">Total Price: ${calculateTotalPrice()}</p>}
        {/* Add buttons for Payment and Edit */}
        {currentStep >= 7 &&
        <div className="flex justify-between mt-4">
          {/* Link back to Dashboard */}
          {/* <Link
          
            
            // className="inline-block py-2 px-4 text-white bg-yellow-400 hover:bg-orange-600 rounded-lg text-decoration-none"
            className={`inline-block py-2 px-4 text-white bg-yellow-400 ${
              isFormIncomplete() ? "cursor-not-allowed" : to="/order"
            } hover:bg-orange-600 rounded-lg text-decoration-none`}
            // onClick={handleDoneButtonClick}
            
          >
            Place a order
          </Link> */}

           <button
            onClick={handleDoneButtonClick}
            disabled={!isPizzaNameFilled() || isFormIncomplete()}
            className={`inline-block py-2 px-4 text-white bg-yellow-400 ${
              (!isPizzaNameFilled() || isFormIncomplete()) ? "cursor-not-allowed" : "hover:bg-orange-600"
            } rounded-lg text-decoration-none`}
          >
              {loading && <Spinner animation="border" size="sm" />}
            Place Order
          </button>
        </div>
}



      </div>
    </div>
  );
};

export default CustomPizzaPage;
