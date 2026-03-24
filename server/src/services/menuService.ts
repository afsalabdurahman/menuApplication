import Menu, {IMenu } from "../models/menu";

export const createMenu = async (data: Partial<IMenu>): Promise<IMenu> => {

  const user = await Menu.create(data);
  return user;
};

export const getMenu = async (lable:string): Promise<IMenu[]> => {
  return await Menu.find({name:lable}).lean()
};
export const getCategory = async (): Promise<IMenu[]> => {
  return await Menu.find({},{name:1,_id:0}).lean()
};