import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [showContainer, setShowContainer] = useState(false);

  const handleDoneButtonClick = () => {
    setShowContainer(true);
  };
  return (<>
    <div className="relative">
      {/* Dashboard content */}
      <div className={`absolute inset-0 bg-gray-200 bg-opacity-50 backdrop-filter backdrop-blur-md ${showContainer ? 'blur-lg' : ''}`}>
        {/* Dashboard content */}
        <h1>Dashboard Content</h1>
        {/* "Done" button */}
        <button onClick={handleDoneButtonClick}>Done</button>
      </div>
      
      {/* Box or container */}
      {showContainer && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-md p-8">
          <h2 className="text-lg font-semibold">Name</h2>
          <p className="text-sm text-gray-700">Description</p>
          <p className="text-sm text-gray-700">Price</p>
          <ul className="list-disc list-inside">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <div className="flex justify-between mt-4">
            {/* Link to Payment Page */}
            <Link to="/payment" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Payment</Link>
            {/* Link back to Dashboard */}
            <Link to="/dashboard" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Edit</Link>
          </div>
        </div>
      )}
    </div>

    </>
  )
}

export default Home;




