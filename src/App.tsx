
import { useEffect, useState } from 'react'
import './App.css'
import DressList from './components/DressList'
import type { DressItemType } from './types/DressItemType'

function App() {

  const [viewProducts,setViewProducts] = useState<DressItemType[]>([])
  
  async function fetchProduct() {
    const response = await fetch('https://dummyjson.com/c/4d62-ccbb-4f6e-baca');
    const data = await response.json();
    setViewProducts(data)
  }

  useEffect(()=>{
    fetchProduct();
  },[])
  
  

  return (
    <>
    {/* <button onClick={fetchProduct} className='bg-amber-950 text-white px-3 py-1 w-44 rounded-md'>Fetch Data</button> */}
      <DressList items = {viewProducts}/>
    </>
  )
}

export default App
