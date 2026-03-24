import mongoose, { Document, Schema } from "mongoose";
import { MenuItem } from "../types/menu";

export interface IMenu extends Document {
  name: string;
  description: string;
  category:string;
  items: MenuItem[];
}


const menuSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String,  },
    category:{type:String,required: true},
    items: {}
  },
  { timestamps: true }
);

export default mongoose.model<IMenu>("Menu", menuSchema);