

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
