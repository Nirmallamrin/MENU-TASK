import Menu from "../models/menuModel.js";
import MenuItem from "../models/menuItemModel.js";
import mongoose from "mongoose";

export const createMenu = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name and description are required." });
    }

    const existingMenu = await Menu.findOne({ name, description });
    if (existingMenu) {
      return res.status(400).json({
        error: "Menu with the same name and description already exists.",
      });
    }

    const newMenu = new Menu({ name, description });
    const createdMenu = await newMenu.save();

    res.status(201).json({
      message: "Menu created successfully",
      menu: createdMenu,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(201).json(menus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const addMenuItem = async (req, res) => {
try {
    const { title,name, description, price, menuId } = req.body;
    const newItem = new MenuItem({ title,name, description, price });
    
    await newItem.save();

    const menu = await Menu.findById(menuId);
    menu.items.push(newItem._id);
    await menu.save();

    res.status(201).send(newItem);
} catch (error) {
    res.status(500).json({ error: error.message });
}
};


export const getItems = async (req, res) => {
  try {
    const menuId = req.params.id;

    
    if (!mongoose.Types.ObjectId.isValid(menuId)) {
      return res.status(400).json({ message: "Invalid menu ID" });
    }

    
    const menu = await Menu.findById(menuId).populate("items");
    if (!menu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.json(menu.items); 
  } catch (error) {
    console.error("Error fetching menu items:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while fetching menu items" });
  }
};

export const editMenu = async (req, res) => {
  try {
    const currentMenu = await Menu.findById(req.params.id);

    const data = {
      name: req.body.name,
      description:req.body.description,
    }

    const menuUpdate = await Menu.findByIdAndUpdate(req.params.id, data, { new: true })
    res.send(menuUpdate)

  } catch (error) {
         console.error(error);
         res.status(500).send("Failed to update menu");
  }
}

export const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    
    if (!menu) {
      return res
        .status(404)
        .json({ success: false, message: "Menu not found" });
    }

    await Menu.findByIdAndDelete(req.params.id)
    return res.send("Succesfully deleted")

  } catch (error) {
    console.error("Error deleting Menu:", error);
  }
};

export const editItem = async (req, res) => {
  try {
    const currentItem = await MenuItem.findById(req.params.id);

    const data = {
      title: req.body.title,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };

    const itemUpdate = await MenuItem.findByIdAndUpdate(req.params.id, data, {new:true});
    res.send(itemUpdate)
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to update item");
  }
};

export const deleteItem = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);

        if (!item) {
          return res
            .status(404)
            .json({ success: false, message: "Item not found" });
    }
    
    await MenuItem.findByIdAndDelete(req.params.id);
    return res.send("Succesfully deleted");
  } catch (error) {}
};

