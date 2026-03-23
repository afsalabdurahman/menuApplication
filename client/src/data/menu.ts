import { Menu } from "../types/menu";

export const MENUS: Menu[] = [

  {
    id: "food",
    label: "FOOD",
    sections: [
      {
        category: "APPETIZERS",
        items: [
          { name: "FIRE CRACKER SALMON", description: "Broiled Cajun salmon bites – topped with bang bang sauce, red peppers and green chiles", price: 16 },
          { name: "LAMB CHOPS", description: "Garlic and rosemary marinated lamb chops topped with our signature ground mustard sauce.", price: 26 },
          { name: "FRIED RED SNAPPER BITES", description: "Deep fried red snapper, served with a house made Cajun remoulade.", price: 18 },
        ],
      },
      {
        category: "SALADS",
        items: [
          { name: "HOUSE SALAD WITH BEANS", description: "Fresh garden greens, house beans, cherry tomatoes, red onion with vinaigrette.", price: 6 },
          { name: "CAESAR SALAD", description: "Crisp romaine, parmesan, house-made caesar dressing, croutons. Option to add protein.", price: 8 },
        ],
      },
      {
        category: "SIDES",
        items: [
          { name: "SWEET POTATO FRIES", description: "Crispy seasoned sweet potato fries served with chipotle dipping sauce.", price: 7 },
          { name: "SAUTÉED VEGETABLES", description: "Seasonal vegetables sautéed in garlic butter and fresh herbs.", price: 6 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    label: "DRINKS",
    sections: [
      {
        category: "COCKTAILS",
        items: [
          { name: "OLD FASHIONED", description: "Bourbon, angostura bitters, orange peel, demerara sugar, large ice cube.", price: 14 },
          { name: "ESPRESSO MARTINI", description: "Vodka, kahlúa, fresh espresso, vanilla syrup, shaken to a frothy finish.", price: 15 },
          { name: "PASSION FRUIT MOJITO", description: "White rum, fresh lime, mint, passion fruit purée, soda water.", price: 13 },
        ],
      },
      {
        category: "WINES",
        items: [
          { name: "CABERNET SAUVIGNON", description: "Rich, full-bodied red with notes of black cherry, cedar and vanilla. Glass / Bottle.", price: 12 },
          { name: "SAUVIGNON BLANC", description: "Crisp, aromatic white with citrus and tropical fruit notes. Glass / Bottle.", price: 11 },
        ],
      },
      {
        category: "NON-ALCOHOLIC",
        items: [
          { name: "VIRGIN MOJITO", description: "Fresh lime, mint, sugar syrup, soda water, cucumber ribbons.", price: 7 },
          { name: "HOUSE LEMONADE", description: "Freshly squeezed lemons, mint, honey syrup, still or sparkling water.", price: 6 },
        ],
      },
    ],
  },
  {
    id: "brunch",
    label: "BRUNCH",
    sections: [
      {
        category: "SIGNATURES",
        items: [
          { name: "EGGS BENEDICT", description: "Poached eggs on toasted brioche with Canadian bacon and house hollandaise sauce.", price: 16 },
          { name: "AVOCADO TOAST", description: "Smashed avocado, poached egg, chili flakes, microgreens on sourdough.", price: 14 },
          { name: "FRENCH TOAST", description: "Thick-cut brioche, maple syrup, fresh berries, whipped mascarpone.", price: 13 },
        ],
      },
      {
        category: "BOWLS",
        items: [
          { name: "ACAI BOWL", description: "Blended acai, banana, granola, fresh berries, honey drizzle, coconut flakes.", price: 12 },
          { name: "SHAKSHUKA", description: "Poached eggs in spiced tomato and pepper sauce, served with pita bread.", price: 15 },
        ],
      },
    ],
  },
];
