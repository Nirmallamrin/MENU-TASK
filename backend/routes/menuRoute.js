import express from "express";
import {
    createMenu,
    getAllMenus,
    addMenuItem,
    getItems,
    editMenu,
    deleteMenu,
    editItem,
    deleteItem
} from "../controllers/menuController.js";
const menuRoute = express.Router()

menuRoute.post("/", createMenu);
menuRoute.get("/", getAllMenus);
menuRoute.post("/item", addMenuItem);
menuRoute.get("/:id/items", getItems);
menuRoute.put("/edit-menu/:id", editMenu);
menuRoute.delete("/delete-menu/:id", deleteMenu);
menuRoute.put("/edit-item/:id", editItem);
menuRoute.delete("/delete-item/:id", deleteItem);


export default menuRoute