


// import React, { useState } from 'react';
// import BaseSelector from './BaseSelector';
// import SauceSelector from './SauceSelector';
// import CheeseSelector from './CheeseSelector';
// import VeggiesSelector from './VeggiesSelector';
// import MeatSelector from './MeatSelector';
// import SizeSelector from './SizeSelector';
// import QuantitySelector from './QuantitySelector';

// const CustomPizzaPage = () => {
//   const [selectedOptions, setSelectedOptions] = useState({
//     base: null,
//     sauce: null,
//     cheese: null,
//     veggies: [],
//     meat: [],
//     size: null,
//     quantity: 1,
//     pizzaName: '',
//   });

//   const [currentStep, setCurrentStep] = useState(0);
//   const [showStartButton, setShowStartButton] = useState(true);

//   const handleOptionChange = (optionType, optionValue) => {
//     setSelectedOptions(prevOptions => ({
//       ...prevOptions,
//       [optionType]: optionValue,
//     }));
//     setCurrentStep(currentStep + 1);
//   };

//   const handleStartButtonClick = () => {
//     setCurrentStep(1); // Start from the first step
//     setShowStartButton(false); // Hide the "Start" button once clicked
//   };

//   const handleDoneButtonClick = () => {
//     // Handle Done button click logic
//    // Calculate total price based on selected options
//     let totalPrice = 0;
//     // Dummy data for prices (replace with actual market prices later)
//     const prices = {
//       base: 5, // Example price for base
//       sauce: 2, // Example price for sauce
//       cheese: 3, // Example price for cheese
//       veggies: 1, // Example price for each veggie
//       meat: 2, // Example price for each meat
//       size: {
//         small: 8, // Example price for small size
//         medium: 10, // Example price for medium size
//         large: 12, // Example price for large size
//       },
//     };

//     totalPrice += prices.base;
//     totalPrice += prices.sauce;
//     totalPrice += prices.cheese;
//     totalPrice += selectedOptions.veggies.length * prices.veggies;
//     totalPrice += selectedOptions.meat.length * prices.meat;
//     totalPrice += prices.size[selectedOptions.size];
//     totalPrice *= selectedOptions.quantity;

//     // Display selected options and total price in the container
//     console.log("Selected Options:", selectedOptions);
//     console.log("Total Price:", totalPrice);
//     alert(selectedOptions)
//     alert(totalPrice)

//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Customize Your Pizza</h1>
//       {showStartButton && (
//         <button onClick={handleStartButtonClick} className="bg-green-500 text-white px-6 py-3 rounded-md">Start</button>
//       )}
//       <div className="space-y-4">
//         {currentStep >= 1 && <BaseSelector onChange={value => handleOptionChange('base', value)} />}
//         {currentStep >= 2 && <SauceSelector onChange={value => handleOptionChange('sauce', value)} />}
//         {currentStep >= 3 && <CheeseSelector onChange={value => handleOptionChange('cheese', value)} />}
//         {currentStep >= 4 && <VeggiesSelector onChange={value => handleOptionChange('veggies', value)} />}
//         {currentStep >= 5 && <MeatSelector onChange={value => handleOptionChange('meat', value)} />}
//         {currentStep >= 6 && <SizeSelector onChange={value => handleOptionChange('size', value)} />}
//         {currentStep >= 7 && <QuantitySelector onChange={value => handleOptionChange('quantity', value)} />}
//         {currentStep >= 8 && (
//           <div>
//             <label htmlFor="pizzaName" className="block text-sm font-medium text-gray-700 mb-2">Pizza Name:</label>
//             <input type="text" id="pizzaName" value={selectedOptions.pizzaName} onChange={e => setSelectedOptions({ ...selectedOptions, pizzaName: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
//           </div>
//         )}
//       </div>
//       {currentStep >= 8 && (
//         <button onClick={handleDoneButtonClick} className="bg-green-500 text-white px-6 py-3 rounded-md mt-8">Done</button>
//       )}
//     </div>
//   );
// };

// export default CustomPizzaPage;

// import React, { useState } from 'react';
// import BaseSelector from './BaseSelector';
// import SauceSelector from './SauceSelector';
// import CheeseSelector from './CheeseSelector';
// import VeggiesSelector from './VeggiesSelector';
// import MeatSelector from './MeatSelector';
// import SizeSelector from './SizeSelector';
// import QuantitySelector from './QuantitySelector';

// const CustomPizzaPage = () => {
//   const [selectedOptions, setSelectedOptions] = useState({
//     base: null,
//     sauce: null,
//     cheese: null,
//     veggies: [],
//     meat: [],
//     size: null,
//     quantity: 1,
//     pizzaName: '',
//   });

//   const [currentStep, setCurrentStep] = useState(0);
//   const [showStartButton, setShowStartButton] = useState(true);
//   const [showQuestion, setShowQuestion] = useState(false);
//   const [isVegetarian, setIsVegetarian] = useState(false);

//   const handleOptionChange = (optionType, optionValue) => {
//     setSelectedOptions(prevOptions => ({
//       ...prevOptions,
//       [optionType]: optionValue,
//     }));
//     setCurrentStep(currentStep + 1);
//   };

//   const handleStartButtonClick = () => {
//     setShowStartButton(false); // Hide the "Start" button once clicked
//     setShowQuestion(true); // Show the question after the "Start" button is clicked
//   };

//   const handleQuestionResponse = (isVeg) => {
//     setIsVegetarian(isVeg);
//     setCurrentStep(1); // Start from the first step
//     setShowQuestion(false); // Hide the question after the user responds
//   };

//   const handleDoneButtonClick = () => {
//     // Handle Done button click logic
  
//    // Calculate total price based on selected options
//     let totalPrice = 0;
//     // Dummy data for prices (replace with actual market prices later)
//     const prices = {
//       base: 5, // Example price for base
//       sauce: 2, // Example price for sauce
//       cheese: 3, // Example price for cheese
//       veggies: 1, // Example price for each veggie
//       meat: 2, // Example price for each meat
//       size: {
//         small: 8, // Example price for small size
//         medium: 10, // Example price for medium size
//         large: 12, // Example price for large size
//       },
//     };

//     totalPrice += prices.base;
//     totalPrice += prices.sauce;
//     totalPrice += prices.cheese;
//     totalPrice += selectedOptions.veggies.length * prices.veggies;
//     totalPrice += selectedOptions.meat.length * prices.meat;
//     totalPrice += prices.size[selectedOptions.size];
//     totalPrice *= selectedOptions.quantity;

//     // Display selected options and total price in the container
//     console.log("Selected Options:", selectedOptions);
//     console.log("Total Price:", totalPrice);
//     alert(selectedOptions)
//     alert(totalPrice)
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Customize Your Pizza</h1>
//       {showStartButton && (
//         <button onClick={handleStartButtonClick} className=" bg-green-400 hover:bg-orange-400 text-white px-6 py-3 rounded-md">Start</button>
//       )}
//       {showQuestion && (
//         <div>
//           <p className="text-black font-semibold mt-2 text-lg">Are you vegetarian or non-vegetarian?</p>
//           <button onClick={() => handleQuestionResponse(true)} className=" bg-yellow-400 hover:bg-green-500 px-6 py-3 rounded-md mt-2 mr-2 hover:">Vegetarian</button>
//           <button onClick={() => handleQuestionResponse(false)} className=" bg-yellow-400 hover:bg-orange-400 px-6 py-3 rounded-md mt-2">Non-Vegetarian</button>
//         </div>
//       )}
//       <div className="space-y-4">
//         {currentStep >= 1 && <BaseSelector onChange={value => handleOptionChange('base', value)} />}
//         {currentStep >= 2 && <SauceSelector onChange={value => handleOptionChange('sauce', value)} />}
//         {currentStep >= 3 && <CheeseSelector onChange={value => handleOptionChange('cheese', value)} />}
//         {currentStep >= 4 && <VeggiesSelector onChange={value => handleOptionChange('veggies', value)} />}
//         {!isVegetarian && currentStep >= 5 && <MeatSelector onChange={value => handleOptionChange('meat', value)} />}
//         {currentStep >= 6 && <SizeSelector onChange={value => handleOptionChange('size', value)} />}
//         {currentStep >= 7 && <QuantitySelector onChange={value => handleOptionChange('quantity', value)} />}
//         {currentStep >= 8 && (
//           <div>
//             <label htmlFor="pizzaName" className="block text-sm font-medium text-gray-700 mb-2">Pizza Name:</label>
//             <input type="text" id="pizzaName" value={selectedOptions.pizzaName} onChange={e => setSelectedOptions({ ...selectedOptions, pizzaName: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
//           </div>
//         )}
//       </div>
//       {currentStep >= 8 && (
//         <button onClick={handleDoneButtonClick} className="bg-green-500 text-white px-6 py-3 rounded-md mt-8">Done</button>
//       )}
//     </div>
//   );
// };

// export default CustomPizzaPage;

// import React, { useState } from 'react';
// import BaseSelector from './BaseSelector';
// import SauceSelector from './SauceSelector';
// import CheeseSelector from './CheeseSelector';
// import VeggiesSelector from './VeggiesSelector';
// import MeatSelector from './MeatSelector';
// import SizeSelector from './SizeSelector';
// import QuantitySelector from './QuantitySelector';

// const CustomPizzaPage = () => {
//   const [selectedOptions, setSelectedOptions] = useState({
//     base: null,
//     sauce: null,
//     cheese: null,
//     veggies: [],
//     meat: [],
//     size: null,
//     quantity: 1,
//     pizzaName: '',
//   });

//   const [currentStep, setCurrentStep] = useState(0);
//   const [showStartButton, setShowStartButton] = useState(true);
//   const [showQuestion, setShowQuestion] = useState(false);
//   const [isVegetarian, setIsVegetarian] = useState(false);

//   // Function to check if any field is empty
//   const isFormIncomplete = () => {
//     return Object.values(selectedOptions).some(value => value === null || value === '' || (Array.isArray(value) && value.length === 0));
//   };

//   const handleOptionChange = (optionType, optionValue) => {
//     setSelectedOptions(prevOptions => ({
//       ...prevOptions,
//       [optionType]: optionValue,
//     }));
//     setCurrentStep(currentStep + 1);
//   };

//   const handleStartButtonClick = () => {
//     setShowStartButton(false); // Hide the "Start" button once clicked
//     setShowQuestion(true); // Show the question after the "Start" button is clicked
//   };

//   const handleQuestionResponse = (isVeg) => {
//     setIsVegetarian(isVeg);
//     setCurrentStep(1); // Start from the first step
//     setShowQuestion(false); // Hide the question after the user responds
//   };

//   const handleDoneButtonClick = () => {
//     // Handle Done button click logic
//     if (isFormIncomplete()) {
//       alert("Please fill out all fields before proceeding.");
//       return;
//     }
//     // Calculate total price based on selected options
//     // Display selected options and total price in the container
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Customize Your Pizza</h1>
//       {showStartButton && (
//         <button onClick={handleStartButtonClick} className=" bg-green-400 hover:bg-orange-400 text-white px-6 py-3 rounded-md">Start</button>
//       )}
//       {showQuestion && (
//         <div>
//           <p className="text-black font-semibold mt-2 text-lg">Are you vegetarian or non-vegetarian?</p>
//           <button onClick={() => handleQuestionResponse(true)} className=" bg-yellow-400 hover:bg-green-500 px-6 py-3 rounded-md mt-2 mr-2 hover:">Vegetarian</button>
//           <button onClick={() => handleQuestionResponse(false)} className=" bg-yellow-400 hover:bg-orange-400 px-6 py-3 rounded-md mt-2">Non-Vegetarian</button>
//         </div>
//       )}
//       <div className="space-y-4">
//         {currentStep >= 1 && <BaseSelector onChange={value => handleOptionChange('base', value)} />}
//         {currentStep >= 2 && <SauceSelector onChange={value => handleOptionChange('sauce', value)} />}
//         {currentStep >= 3 && <CheeseSelector onChange={value => handleOptionChange('cheese', value)} />}
//         {currentStep >= 4 && <VeggiesSelector onChange={value => handleOptionChange('veggies', value)} />}
//         {!isVegetarian && currentStep >= 5 && <MeatSelector onChange={value => handleOptionChange('meat', value)} />}
//         {currentStep >= 6 && <SizeSelector onChange={value => handleOptionChange('size', value)} />}
//         {currentStep >= 7 && <QuantitySelector onChange={value => handleOptionChange('quantity', value)} />}
//         {currentStep >= 8 && (
//           <div>
//             <label htmlFor="pizzaName" className="block text-sm font-medium text-gray-700 mb-2">Pizza Name:</label>
//             <input type="text" id="pizzaName" value={selectedOptions.pizzaName} onChange={e => setSelectedOptions({ ...selectedOptions, pizzaName: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
//           </div>
//         )}
//       </div>
//       {currentStep >= 8 && (
//         <button onClick={handleDoneButtonClick} className={`bg-green-500 text-white px-6 py-3 rounded-md mt-8 ${isFormIncomplete() ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isFormIncomplete()}>Done</button>
//       )}
//     </div>
//   );
// };

// export default CustomPizzaPage;
import React, { useState } from 'react';
import BaseSelector from './BaseSelector';
import SauceSelector from './SauceSelector';
import CheeseSelector from './CheeseSelector';
import VeggiesSelector from './VeggiesSelector';
import MeatSelector from './MeatSelector';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';

const CustomPizzaPage = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    base: null,
    sauce: null,
    cheese: null,
    veggies: [],
    meat: [],
    size: null,
    quantity: 1,
    pizzaName: '',
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [showStartButton, setShowStartButton] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const handleOptionChange = (optionType, optionValue) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [optionType]: optionValue,
    }));
    setCurrentStep(currentStep + 1);
  };

  const handleStartButtonClick = () => {
    setShowStartButton(false); // Hide the "Start" button once clicked
    setShowQuestion(true); // Show the question after the "Start" button is clicked
  };

  const handleQuestionResponse = (isVeg) => {
    setIsVegetarian(isVeg);
    setCurrentStep(1); // Start from the first step
    setShowQuestion(false); // Hide the question after the user responds
  };

  const isFormIncomplete = () => {
    return Object.values(selectedOptions).some(value => value === null || value === '' || (Array.isArray(value) && value.length === 0));
  };

  const handleDoneButtonClick = () => {
    if (isFormIncomplete()) {
      alert("Please fill out all fields before proceeding.");
      return;
    }
    // Handle Done button click logic
    // Calculate total price based on selected options
    let totalPrice = 0;
    // Dummy data for prices (replace with actual market prices later)
    const prices = {
      base: 5, // Example price for base
      sauce: 2, // Example price for sauce
      cheese: 3, // Example price for cheese
      veggies: 1, // Example price for each veggie
      meat: 2, // Example price for each meat
      size: {
        small: 8, // Example price for small size
        medium: 10, // Example price for medium size
        large: 12, // Example price for large size
      },
    };

    totalPrice += prices.base;
    totalPrice += prices.sauce;
    totalPrice += prices.cheese;
    totalPrice += selectedOptions.veggies.length * prices.veggies;
    totalPrice += selectedOptions.meat.length * prices.meat;
    totalPrice += prices.size[selectedOptions.size];
    totalPrice *= selectedOptions.quantity;

    // Display selected options and total price in the container
    console.log("Selected Options:", selectedOptions);
    console.log("Total Price:", totalPrice);
    alert(selectedOptions)
    alert(totalPrice)
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customize Your Pizza</h1>
      {showStartButton && (
        <button onClick={handleStartButtonClick} className="bg-green-400 hover:bg-orange-400 text-white px-6 py-3 rounded-md">Start</button>
      )}
      {showQuestion && (
        <div>
          <p className="text-black font-semibold mt-2 text-lg">Are you vegetarian or non-vegetarian?</p>
          <button onClick={() => handleQuestionResponse(true)} className="bg-yellow-400 hover:bg-green-500 px-6 py-3 rounded-md mt-2 mr-2">Vegetarian</button>
          <button onClick={() => handleQuestionResponse(false)} className="bg-yellow-400 hover:bg-orange-400 px-6 py-3 rounded-md mt-2">Non-Vegetarian</button>
        </div>
      )}
      <div className="space-y-4">
        {currentStep >= 1 && <BaseSelector onChange={value => handleOptionChange('base', value)} />}
        {currentStep >= 2 && <SauceSelector onChange={value => handleOptionChange('sauce', value)} />}
        {currentStep >= 3 && <CheeseSelector onChange={value => handleOptionChange('cheese', value)} />}
        {currentStep >= 4 && <VeggiesSelector onChange={value => handleOptionChange('veggies', value)} />}
        {!isVegetarian && currentStep >= 5 && <MeatSelector onChange={value => handleOptionChange('meat', value)} />}
        {currentStep >= 6 && <SizeSelector onChange={value => handleOptionChange('size', value)} />}
        {currentStep >= 7 && <QuantitySelector onChange={value => handleOptionChange('quantity', value)} />}
        {currentStep >= 8 && (
          <div>
            <label htmlFor="pizzaName" className="block text-sm font-medium text-gray-700 mb-2">Pizza Name:</label>
            <input type="text" id="pizzaName" value={selectedOptions.pizzaName} onChange={e => setSelectedOptions({ ...selectedOptions, pizzaName: e.target.value })} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>
        )}
      </div>
      {currentStep >= 8 && (
        <button onClick={handleDoneButtonClick} disabled={isFormIncomplete()} className="bg-green-500 text-white px-6 py-3 rounded-md mt-8">Done</button>
      )}
    </div>
  );
};

export default CustomPizzaPage;
