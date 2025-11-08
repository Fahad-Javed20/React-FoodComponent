import type { DressItemType } from "../types/DressItemType"
import DressItem from "./DressItem"


interface DressListProps {
    items:DressItemType[];
}

const DressList = ({items}:DressListProps) => {
  return (
    <div>
        {items.map((item) =>(
            <DressItem
            key={item.id}
            product={item}
            />
        ))}
    </div>
  )
}

export default DressList
