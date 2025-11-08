import type { DressItemType } from "../types/DressItemType";

interface DressItemProps {
  product: DressItemType;
}

const DressItem = ({ product }: DressItemProps) => {
  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-xl shadow-md p-4 w-[400px]">
      <img
        className="h-[380px] w-full object-cover rounded-lg"
        src={product.picture}
        alt={product.description}
      />

      <div className="flex flex-col items-start w-full">
        <a href="#" className="text-sm text-gray-700 hover:underline">
          {product.description}
        </a>
        <h1 className="font-bold text-gray-800">PKR {product.price}</h1>
        <button className="border-2 border-gray-800 px-3 py-2 mt-2 text-sm rounded-md hover:bg-gray-800 hover:text-white transition-colors">
          ADD TO BAG
        </button>
      </div>

    
      <div className="flex gap-1 mt-2 self-start">
        <div className="size-6 rounded-full bg-gray-200 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-300">2</div>
        <div className="size-6 rounded-full bg-gray-200 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-300">4</div>
        <div className="size-6 rounded-full bg-gray-200 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-300">6</div>
        <div className="size-6 rounded-full bg-gray-200 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-300">8</div>
        <div className="size-6 rounded-full bg-gray-200 flex items-center justify-center text-sm cursor-pointer hover:bg-gray-300">10</div>
      </div>
    </div>
  );
};

export default DressItem;
