import { useEffect, useState } from "react";
import type { DressItemType } from "../types/DressItemType";
import DressItem from "./DressItem";

interface DressListProps {
  items: DressItemType[];
}

const DressList = ({ items }: DressListProps) => {
  const [InitialItems, setInitialItems] = useState<DressItemType[]>([]);

  useEffect(() => {
    setInitialItems(items);
  }, [items]);
  return (
    <div className="flex justify-around w-full">
      {InitialItems.map((item) => (
        <div key={item.id}>
          <DressItem product={item} />
        </div>
      ))}
    </div>
  );
};

export default DressList;
