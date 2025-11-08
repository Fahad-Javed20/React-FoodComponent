
import './App.css'
import DressList from './components/DressList'
import type { DressItemType } from './types/DressItemType'

function App() {

  const DressDeatils:DressItemType[] = [
    {
      id:1,
      picture:'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    description:'Light Brown Semi Formal Kameez Shalwar',
    price:4500,
    },
    {
      id:2,
      picture:'https://plus.unsplash.com/premium_photo-1661326297568-65045688d10a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500',
    description:'Light Brown Semi Formal Kameez Shalwar',
    price:8900,
    },
    {
      id:3,
      picture:'https://images.unsplash.com/photo-1586897414933-79708324005e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
    description:'Light Brown Semi Formal Kameez Shalwar',
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
