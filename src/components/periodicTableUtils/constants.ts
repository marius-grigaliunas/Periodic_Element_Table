 // types.ts
interface Element {
    number: number;
    symbol: string;
    name: string;
    category: ElementCategory;
    group: number;
    period: number;
  }
  
type ElementCategory =
    | 'nonmetal'
    | 'noble-gas'
    | 'alkali-metal'
    | 'alkaline-earth'
    | 'metalloid'
    | 'transition-metal'
    | 'post-transition-metal'
    | 'lanthanide'
    | 'actinide';
 // constants.ts
 
export const elements: Element[] = [
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', group: 1, period: 1 },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', group: 18, period: 1 },
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', group: 1, period: 2 },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', group: 2, period: 2 },
    { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', group: 13, period: 2 },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', group: 14, period: 2 },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', group: 15, period: 2 },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', group: 16, period: 2 }
  ];
  
export const categoryColors: Record<ElementCategory, string> = {
    'nonmetal': 'bg-yellow-200',
    'noble-gas': 'bg-purple-200',
    'alkali-metal': 'bg-red-200',
    'alkaline-earth': 'bg-orange-200',
    'metalloid': 'bg-green-200',
    'transition-metal': 'bg-blue-200',
    'post-transition-metal': 'bg-gray-200',
    'lanthanide': 'bg-pink-200',
    'actinide': 'bg-indigo-200'
  };