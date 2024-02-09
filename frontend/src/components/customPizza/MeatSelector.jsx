import React, { useState } from 'react';

const MeatSelector = ({ onChange }) => {
  const [selectedMeat, setSelectedMeat] = useState('');
  const handleMeatChange = (e) => {
    const Meat =e.target.value;
    setSelectedMeat(Meat);
    onChange(Meat);
  };

  return (
    <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
      <label htmlFor="meat" className="block text-sm font-medium text-gray-700 mb-2" >Select Meat Toppings:</label>
      <select id="meat" value={selectedMeat} onChange={handleMeatChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" >
        <option value="">Select Meat</option>
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="pork">Pork</option>
        {/* <option value="beef">Beef</option> */}
        {/* Add more meat options as needed */}
      </select>
      {selectedMeat === '' && <p className="text-red-500 text-xs mt-1">Please select a meat.</p>}

    </div>
  );
};

export default MeatSelector;
