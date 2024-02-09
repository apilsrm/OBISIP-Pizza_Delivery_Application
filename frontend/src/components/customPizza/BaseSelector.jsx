// import React from 'react';

// const BaseSelector = ({ onChange }) => {
//   const handleBaseChange = (e) => {
//     const selectedBase = e.target.value;
//     onChange(selectedBase);
//   };

//   return (
//     // <div className=''>
//     //   <label htmlFor="base">Select Pizza Base:</label>
//     //   <select id="base" onChange={handleBaseChange}>
//     //     <option value="thin">Thin Crust</option>
//     //     <option value="medium">Medium Crust</option>
//     //     <option value="large">Large</option>
//     //     <option value="extra-large">Extra-large Crust</option>
//     //   </select>
//     // </div>
//     <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
//     <label htmlFor="base" className="block text-sm font-medium text-gray-700 mb-2">Select Pizza Base:</label>
//     <select id="base" onChange={handleBaseChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
//       <option value="thin">Thin Crust</option>
//       <option value="medium">Medium Crust</option>
//       <option value="large">Large Crust</option>
//       <option value="extra-large">Extra-large Crust</option>
//     </select>
//   </div>
//   );
// };

// export default BaseSelector;


// import React from 'react';

// const BaseSelector = ({ onChange }) => {
//   const handleBaseChange = (e) => {
//     const selectedBase = e.target.value;
//     onChange(selectedBase);
//   };

//   return (
//     <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
//       <label htmlFor="base" className="block text-sm font-medium text-gray-700 mb-2">Select Pizza Base:</label>
//       <select id="base" onChange={handleBaseChange} defaultValue="none" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
//         <option value="none" disabled hidden>Select Base</option>
//         <option value="thin">Thin Crust</option>
//         <option value="medium">Medium Crust</option>
//         <option value="large">Large Crust</option>
//         <option value="extra-large">Extra-large Crust</option>
//       </select>
//     </div>
//   );
// };

// export default BaseSelector;


import React, { useState } from 'react';

const BaseSelector = ({ onChange }) => {
  const [selectedBase, setSelectedBase] = useState('');

  const handleBaseChange = (e) => {
    const value = e.target.value;
    setSelectedBase(value);
    onChange(value);
  };

  return (
    <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
      <label htmlFor="base" className="block text-sm font-medium text-gray-700 mb-2">Select Pizza Base:</label>
      <select id="base" value={selectedBase} onChange={handleBaseChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
        <option value="">Select Base</option>
        <option value="thin">Thin Crust</option>
        <option value="medium">Medium Crust</option>
        <option value="thick">Thick Crust</option>
        <option value="extra-thick">Extra-thick Crust</option>
      </select>
      {selectedBase === '' && <p className="text-red-500 text-xs mt-1">Please select a base.</p>}
    </div>
  );
};

export default BaseSelector;
