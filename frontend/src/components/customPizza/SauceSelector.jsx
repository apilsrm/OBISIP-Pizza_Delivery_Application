import React, { useState } from 'react';

const SauceSelector = ({ onChange }) => {
  const [selectedSauce, setSelectedSauce] = useState('');

  const handleSauceChange = (e) => {
    const sauce = e.target.value;
  setSelectedSauce(sauce);
    onChange(sauce);
  };

  return (
    <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
      <label htmlFor="sauce" className="block text-sm font-medium text-gray-700 mb-2">Select Pizza Sauce:</label>
      <select id="sauce" value={selectedSauce} onChange={handleSauceChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" >
        <option value="">Select Sauce</option>
        <option value="tomato">Tomato Sauce</option>
        <option value="white">White Sauce</option>
        <option value="pesto">Pesto</option>
        <option value="garlic">White Garlic Sauce</option>
        <option value="ranch">Garlic Ranch Sauce</option>

        {/* Add more sauce options as needed */}
      </select>
      {selectedSauce === '' && <p className="text-red-500 text-xs mt-1">Please select a sauce.</p>}
       
    </div>
  );
};

export default SauceSelector;
