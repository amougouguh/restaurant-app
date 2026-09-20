export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'starter' | 'main' | 'dessert' | 'drink';
  image?: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  { id: 1, name: 'Roasted Tomato Soup', description: 'Slow-roasted tomatoes, basil oil, sourdough croutons', price: 8.5, category: 'starter' },
  { id: 2, name: 'Burrata & Peach', description: 'Creamy burrata, grilled peach, prosciutto, balsamic', price: 12.0, category: 'starter' },
  { id: 3, name: 'Crispy Calamari', description: 'Lightly fried squid, lemon aioli, pickled chilies', price: 11.5, category: 'starter' },
  // Mains
  { id: 4, name: 'Grilled Salmon', description: 'Atlantic salmon, lemon butter, seasonal vegetables', price: 24.99, category: 'main' },
  { id: 5, name: 'Wild Mushroom Risotto', description: 'Arborio rice, porcini, parmesan, truffle oil', price: 19.5, category: 'main' },
  { id: 6, name: 'Herb Roast Chicken', description: 'Half chicken, rosemary jus, crushed potatoes', price: 22.0, category: 'main' },
  // Desserts
  { id: 7, name: 'Dark Chocolate Tart', description: '70% chocolate ganache, sea salt, crème fraîche', price: 9.5, category: 'dessert' },
  { id: 8, name: 'Lemon Posset', description: 'Set cream, shortbread, candied lemon', price: 8.0, category: 'dessert' },
  { id: 9, name: 'Vanilla Panna Cotta', description: 'Madagascan vanilla, berry compote', price: 8.5, category: 'dessert' },
  // Drinks
  { id: 10, name: 'House Red', description: 'Glass of Tempranillo, Rioja', price: 7.5, category: 'drink' },
  { id: 11, name: 'Craft Lemonade', description: 'Fresh lemon, mint, sparkling water', price: 4.5, category: 'drink' },
  { id: 12, name: 'Espresso', description: 'Double shot, single origin', price: 3.5, category: 'drink' },
];