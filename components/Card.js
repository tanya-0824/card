// CardComponent.js
import React from 'react';
import menimage from '../components/images/menimage.png'
const CardComponent = () => {
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="flex items-center justify-center h-64">
        <img
          className="w-48 h-48 object-cover rounded-full"
          src={menimage}
          alt="image"
        />
      </div>
      <div className="p-6 text-center">
        <h5 className="text-3xl font-medium text-black mb-2">Joe Keery</h5>
        <p className="text-lg text-gray-500 mb-4">Visual Designer</p>
        <div className="flex justify-center">
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
            Add friend
          </button>
          <div className="w-4"></div> {/* Small gap between buttons */}
          <button className="px-6 py-3 border border-gray-300 bg-white text-gray-500 rounded-lg hover:bg-gray-100">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
