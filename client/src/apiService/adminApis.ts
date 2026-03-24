import axios from "axios";
import { MenuForm } from "../types/menu";

const apiUrl = import.meta.env.VITE_API_URL;

export const createMenu = async (form: MenuForm): Promise<void> => {
  try {
    await axios.post(`${apiUrl}/menu/create`, form);
  } catch (error) {
    console.log(error);
    throw error; 
  }
};