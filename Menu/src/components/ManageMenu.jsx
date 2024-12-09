import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageMenu = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [menus, setMenus] = useState([]);
  const [items, setItems] = useState([]);
  const [itemtitle, setTitle] = useState([])
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("");

  const handleAddMenu = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/menu", {
        name,
        description,
      });
      setMenus((prevMenus) => [...prevMenus, data]);
      setName("");
      setDescription("");
      alert("succesfully added")
    } catch (error) {
      console.error("There was an error creating the Menu!", error);
      alert("Failed to add Menu");
    }
  };

  const handleAddMenuItem = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/menu/item", {
        title: itemtitle,
        name: itemName,
        description: itemDescription,
        price: itemPrice,
        menuId: selectedMenu,
      });
      setItems((prevItems) => [...prevItems, data]);
      setTitle("")
      setItemName("");
      setItemDescription("");
      setItemPrice("");
      alert("Successfully Added")
    } catch (error) {
      console.error("There was an error adding the item!", error);
    }
  };

  const selectingMenus = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/menu");
      setMenus(data);
      
    } catch (error) {
      console.error("Error loading menus", error);
    }
  };

  useEffect(() => {
    selectingMenus();
  }, []);

  return (
    
      <div className=" container mx-auto p-5 w-1/2">
        <h1 className="flex justify-center text-3xl font-bold mb-5">Menu Manager</h1>

        <div className="mb-5">
          <h2 className="text-xl flex justify-center font-semibold mb-2">
            Add Menu
          </h2>
          <input
            type="text"
            placeholder="Menu Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={handleAddMenu}
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add Menu
          </button>
        </div>

        <div className="mb-5">
          <h2 className="text-xl flex justify-center font-semibold mb-2">
            Add Menu Items
          </h2>
          <select
            value={selectedMenu}
            onChange={(e) => setSelectedMenu(e.target.value)}
            onClick={selectingMenus} // Change this to load menus on mount
            className="w-full p-2 border border-gray-300 rounded mb-2"
          >
            <option value="" disabled>
              Select Menu
            </option>
            {menus.map((menu, index) => (
              <option key={index} value={menu._id}>
                {menu.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Item Title"
            value={itemtitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Price"
            value={itemPrice}
            onChange={(e) => setItemPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <button
            onClick={handleAddMenuItem}
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Add Item
          </button>
        </div>

        {/* <div>
                <h3 className="text-lg font-semibold mb-2">Menu Items</h3>
                <ul className="list-disc pl-5">
                    {items.map((item, index) => (
                        <li key={index} className="mb-2">
                            <p className="font-medium">Name: {item.name}</p>
                            <p className="text-gray-600">Description: {item.description}</p>
                            <p className="text-gray-600">Price: {item.price}</p>
                        </li>
                    ))}
                </ul>
            </div> */}
      </div>
    
  );
};

export default ManageMenu;
