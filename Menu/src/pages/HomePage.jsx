import React from "react";

const HomePage = () => {
  return (
    <div className="bg-custom-image bg-cover bg-center w-full h-full flex flex-col justify-center items-center p-6">
      
      <div className="text-center text-white ">
        <h1 className="text-5xl font-bold mb-4 ">Welcome to Our Platform</h1>
        <p className="text-lg text-black">
          Discover amazing features and content designed just for you. Let’s
          explore together!
        </p>
      </div>

      
      <div className="flex mt-6 space-x-4">
        <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200">
          Explore Features
        </button>

      </div>

      
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Our Highlights
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-60 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-white">Feature 1</h3>
            <p className="text-sm text-gray-200">
              Learn more about our amazing features.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-60 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-white">Feature 2</h3>
            <p className="text-sm text-gray-200">
              Explore the benefits we offer for you.
            </p>
          </div>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-4 w-60 shadow-md hover:shadow-lg">
            <h3 className="text-xl font-bold text-white">Feature 3</h3>
            <p className="text-sm text-gray-200">
              Get to know how we make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
