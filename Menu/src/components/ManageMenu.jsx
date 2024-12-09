import React from 'react'
import { useState } from 'react';
const ManageMenu = () => {

    const [menuName, setMenuName] = useState("");
    const [menuDescription, setMenuDescription] = useState("");
    const [menus, setMenus] = useState([]);
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [selectedMenu, setSelectedMenu] = useState("");
    
    const handleAddMenu = () => {

    }

    const handleAddMenuItem = () => {

    }

  return (
    <div className="container mx-auto p-5 w-1/2">
      <h1 className="text-2xl font-bold mb-5">Menu Manager</h1>

      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-2">Add Menu</h2>
        <input
          type="text"
          placeholder="Menu Name"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={menuDescription}
          onChange={(e) => setMenuDescription(e.target.value)}
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
        <h2 className="text-xl font-semibold mb-2">Add Menu Items</h2>
        <select
          value={selectedMenu}
          onChange={(e) => setSelectedMenu(e.target.value)}
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
}

export default ManageMenu