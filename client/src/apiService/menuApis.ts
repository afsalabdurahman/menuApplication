import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
export const getMenu = async (lable: string) => {
    try {
        const response = await axios.get(`${apiUrl}/menu?lable=${lable}`);

        return response.data.data[0]
      
    } catch (error) {
        console.log(error)
    }
}
export const getCategory=async ()=>{
    try {
       const response = await axios.get(`${apiUrl}/menu/category`)
     
       return response.data.data
    } catch (error) {
        console.log(error)
    }
}