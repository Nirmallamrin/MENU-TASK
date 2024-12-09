import express from "express";
import { createMenu, getAllMenus,addMenuItem,getItems} from "../controllers/menuController.js";
const menuRoute = express.Router()

menuRoute.post("/", createMenu)
menuRoute.get("/", getAllMenus);
menuRoute.post("/item", addMenuItem);
menuRoute.get("/:id/items", getItems);

export default menuRoute