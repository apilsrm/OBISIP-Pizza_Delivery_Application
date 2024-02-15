// import React from 'react';

// const VeggiesSelector = ({ onChange }) => {
//   const handleVeggiesChange = (e) => {
//     const selectedVeggies = e.target.value;
//     onChange(selectedVeggies);
//   };

//   return (
//     <div  className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
//       <label htmlFor="veggies" className="block text-sm font-medium text-gray-700 mb-2">Select Veggies Toppings:</label>
//       <select id="veggies"  onChange={handleVeggiesChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
//         <option value="mushrooms">Mushrooms</option>
//         <option value="onions">Onions</option>
//         <option value="bellpeppers">Bell Peppers</option>
//         <option value="blackolives">Black Olives</option>
//         <option value="spinach">Spinach</option>


//         {/* Add more veggies options as needed */}
//       </select>
//     </div>
//   );
// };

// export default VeggiesSelector;

import React, { useState } from 'react';

const VeggiesSelector = ({ onChange }) => {

  const [selectedVeggie, setSelectedVeggies] = useState('');

  const handleVeggiesChange = (e) => {
    // const value = Array.from(e.target.selectedOptions, option => option.value);
    const value =  e.target.value;
    setSelectedVeggies(value);
    onChange(value);

  };

  return (
    <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
      <label htmlFor="veggies" className="block text-sm font-medium text-gray-700 mb-2">Select Veggies Toppings:</label>
      <select id="veggies" value={selectedVeggie} onChange={handleVeggiesChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
        <option value="">Select veggeies</option>
        <option value="mushrooms">Mushrooms</option>
        <option value="onions">Onions</option>
        <option value="bellpeppers">Bell Peppers</option>
        <option value="blackolives">Black Olives</option>
        <option value="spinach">Spinach</option>
    
      </select>
      {selectedVeggie === '' && <p className="text-red-500 text-xs mt-1">Please select a veggies.</p>}

    </div>
  );
};

export default VeggiesSelector;

