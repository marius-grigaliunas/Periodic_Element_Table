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
 
const elements: Element[] = [
    { number: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', group: 1, period: 1 },
    { number: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', group: 18, period: 1 },
    { number: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', group: 1, period: 2 },
    { number: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth', group: 2, period: 2 },
    { number: 5, symbol: 'B', name: 'Boron', category: 'metalloid', group: 13, period: 2 },
    { number: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', group: 14, period: 2 },
    { number: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', group: 15, period: 2 },
    { number: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', group: 16, period: 2 },
    { number: 9, symbol: 'F', name: 'Flouride', category: 'nonmetal', group: 17, period: 2 },
    { number: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', group: 18, period: 2 }
  ];
  
const categoryColors: Record<ElementCategory, string> = {
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
  

  interface PeriodicElementProps {
    element: Element;
    onClick?: (element: Element) => void;
  }
  
  const PeriodicElement: React.FC<PeriodicElementProps> = ({ element, onClick }) => {
    // Smaller base size with responsive scaling
    const baseClasses = `
      relative p-0.5 border 
      transition-transform hover:scale-105 hover:z-10
      cursor-pointer
      w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
    `;
  
    return (
      <div 
        className={`${baseClasses} ${categoryColors[element.category]}`}
        style={{
          gridColumn: element.group,
          gridRow: element.period
        }}
        onClick={() => onClick?.(element)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick?.(element);
          }
        }}
      >
        <div className="text-[8px] sm:text-[10px] absolute top-0.5 left-0.5">{element.number}</div>
        <div className="text-sm sm:text-base md:text-lg font-bold text-center mt-1 sm:mt-2">{element.symbol}</div>
        <div className="text-[6px] sm:text-[8px] md:text-xs text-center truncate">{element.name}</div>
      </div>
    );
  };
  
  const PeriodicTable: React.FC = () => {
    const handleElementClick = (element: Element) => {
      console.log('Element clicked:', element);
    };
  
    return (
      <div className="w-full max-w-full mx-auto p-2 sm:p-4">
        <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center">Periodic Table</div>
        
        {/* Container with horizontal scroll on smaller screens */}
        <div className="w-full overflow-x-auto overflow-y-hidden">
          {/* Fixed minimum width to ensure readability */}
          <div className="inline-grid grid-cols-18 gap-0.5 sm:gap-1 p-2 sm:p-4 min-w-[900px] bg-white rounded-lg shadow-lg">
            {elements.map(element => (
              <PeriodicElement 
                key={element.number} 
                element={element}
                onClick={handleElementClick}
              />
            ))}
          </div>
        </div>
  
        {/* Responsive legend */}
        <div className="mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2 justify-center text-xs sm:text-sm">
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-1 sm:gap-2">
              <div className={`w-3 h-3 sm:w-4 sm:h-4 ${color}`}></div>
              <span className="capitalize">
                {category.replace('-', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PeriodicTable;