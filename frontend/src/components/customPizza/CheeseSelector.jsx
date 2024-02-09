import React, { useState } from 'react';

const CheeseSelector = ({ onChange }) => {
  const [selectedCheese, setSelectedCheese] = useState(''); 


  const handleCheeseChange = (e) => {
    const value =  e.target.value; //Array.from(e.target.selectedOptions, option => option.value);
    setSelectedCheese(value);
    
    onChange(value);
  };

  return (
    <div className='w-full bg-gray-100 rounded-md p-4 shadow-md'>
      <label htmlFor="cheese" className="block text-sm font-medium text-gray-700 mb-2" >Select Cheese Type:</label>
      <select id="cheese" value={selectedCheese} onChange={handleCheeseChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500">
        <option value="">Select Cheese</option>
        <option value="mozzarella">Mozzarella</option>
        <option value="cheddar">Cheddar</option>
        <option value="aged">Aged Havarti</option>
        <option value="gorgonzola">Gorgonzola</option>
        <option value="parmigiano">Parmigiano-Reggiano</option>

        {/* Add more cheese options as needed */}
      </select>
      {selectedCheese === '' && <p className="text-red-500 text-xs mt-1">Please select a cheese.</p>}

    </div>
  );
};

export default CheeseSelector;
