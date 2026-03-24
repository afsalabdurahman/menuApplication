import express from "express";
import * as menuController from "../controllers/menuController";

const router = express.Router();

router.post("/menu/create", menuController.createMenu); // create user
router.get("/menu", menuController.getmenu);
router.get("/menu/category",menuController.getCategory)
   // get all users

export default router;