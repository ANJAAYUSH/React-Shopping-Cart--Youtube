
import { useParams } from "react-router-dom"
import { items } from './Data'
import Product from "./Product";
import { useEffect, useState } from "react";


const Searchitem = ({cart, setCart}) => {
  const {term} = useParams();
  const [filterData, setFilterData] = useState([]);
   
  useEffect(() => {
    const filtereData = () =>{
    const data =  items.filter((p)=>p.title.toLowerCase().includes(term.
    toLowerCase()));
    setFilterData(data)
  }

  filtereData();

}, [term])


  return (
  <Product cart={cart} setCart={setCart} items ={filterData} />
  )
}

export default Searchitem
