export interface MenuItem {
  id:string;
  name: string;
  description: string;
  price: number |string;
}

export interface MenuCategory {
  id:string
  category: string;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  label: string;
  sections: MenuCategory[];
}
export interface MenuForm {
  id?:string|number;
  name: string;
  description: string;
  category:string;
  items: MenuItem[];
}