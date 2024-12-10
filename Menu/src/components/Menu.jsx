import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [menus, setMenus] = useState([]); 
  const [items, setItems] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await axios.get(
          "https://menu-task.onrender.com/api/menu"
        ); 
        if (Array.isArray(response.data)) {
          setMenus(response.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching menus:", error);
      }
    };
    fetchMenus();
  }, []);

  useEffect(() => {
    if (!selectedMenu) return;

    const fetchItems = async () => {
      try {
        const { data } = await axios.get(
          `https://menu-task.onrender.com/api/menu/${selectedMenu._id}/items`
        );
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [selectedMenu]);

  const handleNavigation = (menu) => {
    setSelectedMenu(menu); 
  };

  return (
    <div className="p-6 bg-custom-image bg-cover bg-center min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold text-center text-black mb-4">OUR MENU</h1>

      <p className="text-lg text-center text-white mb-8">
        Discover our delicious selection of food, refreshing drinks, and
        delightful brunch options. Click below to explore!
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {menus.length > 0 ? (
          menus.map((menu) => (
            <button
              key={menu._id}
              className="px-6 py-2 bg-black text-white rounded hover:bg-blue-600 transition-colors"
              onClick={() => handleNavigation(menu)}
            >
              {menu.name}
            </button>
          ))
        ) : (
          <p className="text-white text-center">Loading menus...</p>
        )}
      </div>

      <div className="mt-8 max-w-4xl w-full bg-black">
        {selectedMenu && (
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {selectedMenu.description}
            </h2>
          </div>
        )}

        
        {items.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item._id}
                className="p-4 text-white flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="font-bold text-blue-600">₹{item.price}</span>
                </div>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center">Select a menu to view items.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
