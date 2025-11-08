import type { DressItemType } from "../types/DressItemType";

interface DressItemProps {
    product:DressItemType;
}

const DressItem = ({product}:DressItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="h-2/3 w-1/3 bg-white">
        <img
          className="h-[440px] w-full object-cover "
          src={product.picture}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start">
        <a href="#">{product.description}</a>
        <h1 className="font-bold">PKR {product.price}</h1>
        <button className="border-2 px-3 py-2 mt-2">ADD TO BAG</button>
        
      </div>
      <div className="flex gap-1 mt-2 ">
        <div className="size-6 rounded-full bg-gray-300 flex items-center justify-center">2</div>
        <div className="size-6 rounded-full bg-gray-300 flex items-center justify-center">4</div>
        <div className="size-6 rounded-full bg-gray-300 flex items-center justify-center">6</div>
        <div className="size-6 rounded-full bg-gray-300 flex items-center justify-center">8</div>
        <div className="size-6 rounded-full bg-gray-300 flex items-center justify-center">10</div>
      </div>
    </div>
  );
};

export default DressItem;
