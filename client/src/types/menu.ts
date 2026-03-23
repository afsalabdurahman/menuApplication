export interface MenuItem {
  name: string;
  description: string;
  price: number |string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  label: string;
  sections: MenuCategory[];
}
export interface MenuForm {
  name: string;
  description: string;
  items: MenuItem[];
}