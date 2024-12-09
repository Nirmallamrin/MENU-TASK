import React from "react";

const Menu = () => {

    const handleNavigation = () => {
        
    }
  return (
    <div className="p-6 bg-custom-image bg-cover bg-center min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        MENU
      </h1>

      <p className="text-lg text-center text-white mb-8">
        Discover our delicious selection of food, refreshing drinks, and
        delightful brunch options. Click below to explore!
      </p>

      <div className="flex justify-center space-x-6">
        <button
          className="px-6 py-2 bg-black text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => handleNavigation("food")}
        >
          Food
        </button>
        <button
          className="px-6 py-2 bg-black text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => handleNavigation("drinks")}
        >
          Drinks
        </button>
        <button
          className="px-6 py-2 bg-black text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => handleNavigation("brunches")}
        >
          Brunches
        </button>
      </div>
    </div>
  );


};

export default Menu;
