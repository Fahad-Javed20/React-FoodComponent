
import './App.css'
import DressList from './components/DressList'
import type { DressItemType } from './types/DressItemType'

function App() {

  const DressDeatils:DressItemType[] = [
    {
      id:1,
      picture:'https://www.junaidjamshed.com/media/catalog/product/3/9/39503jcks_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755',
    description:'Light Brown',
    price:4500,
    },
    {
      id:2,
      picture:'https://www.junaidjamshed.com/media/catalog/product/3/9/39539jckp_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755',
    description:'Light Brown',
    price:8900,
    },
    {
      id:3,
      picture:'https://www.junaidjamshed.com/media/catalog/product/3/9/39538jckp_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755',
    description:'Light Brown',
    price:1000,
    }
  ];
  

  return (
    <>
      <DressList items = {DressDeatils}/>
    </>
  )
}

export default App
