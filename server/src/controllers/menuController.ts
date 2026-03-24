import { Request, Response } from "express";
import * as menuService from "../services/menuService";

export const createMenu = async (req: Request, res: Response) => {
  try {

    const user = await menuService.createMenu(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getmenu = async (req: Request, res: Response) => {
  try {
 
    const lable = req.query.lable as string
     const menu = await menuService.getMenu(lable);
    res.status(200).json({status:"Success",data:menu});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
export const getCategory = async (req: Request, res: Response) => {
  try {
  
  
     const category = await menuService.getCategory();
    res.status(200).json({status:"Success",data:category});
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};