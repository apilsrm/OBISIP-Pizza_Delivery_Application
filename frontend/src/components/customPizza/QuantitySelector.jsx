// import React from 'react';

// const QuantitySelector = ({ onChange }) => {
//   const handleQuantityChange = (e) => {
//     const quantity = parseInt(e.target.value);
//     onChange(quantity);
//   };

//   return (
//     <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
//       <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Select Quantity:</label>
//       <input type="number" id="quantity" min="1" defaultValue="1"  onChange={handleQuantityChange} />
//     </div>
//   );
// };

// export default QuantitySelector;

import React, { useState } from 'react';

const QuantitySelector = ({ onChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  return (
    <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Select Quantity:</label>
      <input type="number" id="quantity" min="1" value={quantity} onChange={handleQuantityChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      {quantity <= 0 && <p className="text-red-500 text-xs mt-1">Quantity must be greater than zero.</p>}
    </div>
  );
};

export default QuantitySelector;
