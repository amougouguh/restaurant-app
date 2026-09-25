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
  { id: 1, name: 'Puff-Puff', description: 'Soft golden dough bites lightly spiced and served warm', price: 1500, category: 'starter' },
  { id: 2, name: 'Soya Brochettes', description: 'Chargrilled beef skewers with onions, peppers, and spicy pepper sauce', price: 3000, category: 'starter' },
  { id: 3, name: 'Plantain Chips', description: 'Crisp ripe plantain slices with a house chili dip', price: 2000, category: 'starter' },
  // Mains
  { id: 4, name: 'Ndole', description: 'Bitterleaf stew with groundnuts and shrimp, served with plantain', price: 6500, category: 'main' },
  { id: 5, name: 'Poulet DG', description: 'Tender chicken braised with ripe plantain, carrots, and peppers', price: 7000, category: 'main' },
  { id: 6, name: 'Eru & Water Fufu', description: 'Slow-cooked eru greens with spinach, beef, and smoked fish', price: 6500, category: 'main' },
  { id: 7, name: 'Grilled Fish & Miondo', description: 'Seasoned whole fish with cassava sticks and fresh pepper sauce', price: 7500, category: 'main' },
  // Desserts
  { id: 8, name: 'Koki Corn Cakes', description: 'Steamed black-eyed pea cakes with a rich, savory finish', price: 2500, category: 'dessert' },
  { id: 9, name: 'Caramelized Plantain', description: 'Sweet ripe plantain finished with honey and toasted groundnuts', price: 2500, category: 'dessert' },
  // Drinks
  { id: 10, name: 'Folere Juice', description: 'Refreshing hibiscus infusion with ginger and citrus', price: 1500, category: 'drink' },
  { id: 11, name: 'Fresh Ginger Juice', description: 'Bright house-made ginger drink with pineapple and lime', price: 1500, category: 'drink' },
  { id: 12, name: 'Cameroonian Coffee', description: 'Aromatic coffee brewed from beans grown in Cameroon', price: 2000, category: 'drink' },
];