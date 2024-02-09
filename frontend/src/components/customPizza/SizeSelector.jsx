// import React from 'react';

// const SizeSelector = ({ onChange }) => {
//   const handleSizeChange = (e) => {
//     const selectedSize = e.target.value;
//     onChange(selectedSize);
//   };

//   return (
//     <div>
//       <label>Select Pizza Size:</label>
//       <div>
//         <input type="radio" id="small" name="size" value="small" onChange={handleSizeChange} />
//         <label htmlFor="small">Small</label>
//       </div>
//       <div>
//         <input type="radio" id="medium" name="size" value="medium" onChange={handleSizeChange} />
//         <label htmlFor="medium">Medium</label>
//       </div>
//       <div>
//         <input type="radio" id="large" name="size" value="large" onChange={handleSizeChange} />
//         <label htmlFor="large">Large</label>
//       </div>
//       {/* Add more size options as needed */}
//     </div>
//   );
// };

// export default SizeSelector;


// import React from 'react';

// const SizeSelector = ({ onChange }) => {
//   const handleSizeChange = (e) => {
//     const selectedSize = e.target.value;
//     onChange(selectedSize);
//   };

//   return (
//     <div className="w-full bg-white rounded-md p-4 shadow-md">
//       <label className="block text-sm font-medium text-gray-700 mb-2">Select Pizza Size:</label>
//       <div className="flex items-center text-start justify-between mb-2">
//         <input type="radio" id="small" name="size" value="small" onChange={handleSizeChange} className="mr-2" />
//         <label htmlFor="small" className="text-sm ">Small</label>
//       </div>
//       <div className="flex items-center justify-between mb-2">
//         <input type="radio" id="medium" name="size" value="medium" onChange={handleSizeChange} className="mr-2" />
//         <label htmlFor="medium" className="text-sm">Medium</label>
//       </div>
//       <div className="flex items-center justify-between">
//         <input type="radio" id="large" name="size" value="large" onChange={handleSizeChange} className="mr-2" />
//         <label htmlFor="large" className="text-sm">Large</label>
//       </div>
//     </div>
//   );
// };

// export default SizeSelector;

import React, { useState } from 'react';

const SizeSelector = ({ onChange }) => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeChange = (e) => {
    const value = e.target.value;
    setSelectedSize(value);
    onChange(value);
  };

  return (
    <div className="w-full bg-gray-100 rounded-md p-4 shadow-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Pizza Size:</label>
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-2">
          <input type="radio" id="small" name="size" value="small" onChange={handleSizeChange} className="mr-2" checked={selectedSize === 'small'} />
          <label htmlFor="small" className="text-sm">Small</label>
        </div>
        <div className="flex items-center mb-2">
          <input type="radio" id="medium" name="size" value="medium" onChange={handleSizeChange} className="mr-2" checked={selectedSize === 'medium'} />
          <label htmlFor="medium" className="text-sm">Medium</label>
        </div>
        <div className="flex items-center">
          <input type="radio" id="large" name="size" value="large" onChange={handleSizeChange} className="mr-2" checked={selectedSize === 'large'} />
          <label htmlFor="large" className="text-sm">Large</label>
        </div>
      </div>
      {selectedSize === '' && <p className="text-red-500 text-xs mt-1">Please select a size.</p>}
    </div>
  );
};

export default SizeSelector;
