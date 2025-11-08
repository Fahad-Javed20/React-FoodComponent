import type { DressItemType } from "../types/DressItemType"
import DressItem from "./DressItem"

interface DressListProps {
  items: DressItemType[];
}

const DressList = ({ items }: DressListProps) => {
  return (
    <div className="flex justify-around w-full">
      {items.map((item) => (
        <div key={item.id} >
          <DressItem product={item} />
        </div>
      ))}
    </div>
  )
}

export default DressList
