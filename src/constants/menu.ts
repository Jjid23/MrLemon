export interface DrinkOption {
  id: string;
  name: string;
  price: number;
}

export interface Drink {
  id: string;
  name: string;
  sizes: {
    [key: string]: {
      price: number;
      type: 'hot' | 'cold' | 'both';
      inventory?: { [key: string]: number };
      categories?: {
        [key: string]: string[];
      };
      flavors?: string[];
    };
  };
}

export const MENU: Drink[] = [
  {
    id: 'lemonade',
    name: 'Lemonade',
    sizes: {
      '12oz': {
        price: 49,
        type: 'hot',
        inventory: { 'Cups 12oz': 1, 'Lemon': 1 },
        categories: {
          'Hot Only': ['Ginger Lemonade', 'Classic Lemon']
        }
      },
      '16oz': {
        price: 59,
        type: 'cold',
        inventory: { 'Cups 16oz': 1, 'Lemon': 1 },
        categories: {
          'Classic': ['Classic'],
          'Yakult': ['Yakult'],
          'Flavor': ['Green Apple', 'Strawberry', 'Mango', 'Kiwi', 'Peach']
        }
      },
      '22oz': {
        price: 79,
        type: 'cold',
        inventory: { 'Cups 22oz': 1, 'Lemon': 2 },
        categories: {
          'Classic': ['Classic'],
          'Yakult': ['Yakult'],
          'Flavor': ['Green Apple', 'Strawberry', 'Mango', 'Kiwi', 'Peach']
        }
      }
    }
  },
  {
    id: 'calamansi',
    name: 'Calamansi',
    sizes: {
      '12oz': {
        price: 45,
        type: 'both',
        inventory: { 'Cups 12oz': 1, 'Calamansi': 3 },
        categories: {
          'Selection': ['Ginger Calamansi', 'Classic Calamansi']
        }
      },
      '16oz': {
        price: 55,
        type: 'cold',
        inventory: { 'Cups 16oz': 1, 'Calamansi': 4 },
        categories: {
          'Selection': ['Classic', 'Mango', 'Yakult']
        }
      },
      '22oz': {
        price: 75,
        type: 'cold',
        inventory: { 'Cups 22oz': 1, 'Calamansi': 6 },
        categories: {
          'Selection': ['Classic', 'Mango', 'Yakult']
        }
      }
    }
  }
];

export const ADDONS = [
  { name: 'Nata de Coco', price: 15 },
  { name: 'Popping Boba', price: 20 }
];
