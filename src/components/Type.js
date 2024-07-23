import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
import Product from './Products'
import Options from './Options'
import ErrorBanner from './ErrorBanner'
import {OrderContext} from '../context/OrderContext'

function Type({orderType}) {

  const [items,setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderData,updateItemCount] = useContext(OrderContext);

  useEffect(() => {
      loadItems(orderType);
  },[orderType])

  const loadItems = async (orderType) => {
    try{
      const reasponse = await axios.get(`http://localhost:4000/${orderType}`)
      setItems(reasponse.data);
    }catch(error){
      setError(true);
    }
  }

  const ItemComponent = orderType === 'products'? Product : Options;

  const optionItems = items.map(item=>{
    return(
      <ItemComponent key={item.name} 
                     name={item.name} 
                     imagePath={item.imagePath}
                     updateItemCount={(itemName,newItemCount)=>updateItemCount(itemName,newItemCount,orderType)}/>
    )
  })

  if(error){
    return (
      <ErrorBanner message='에러 발생'/>
    )
  }

  return (
    <div>
        <h2>주문 종류</h2>
        <p>하나의 가격</p>
        <p>총 가격 : {orderData.totals[orderType ]} </p>
        <div
            style={{display: 'flex', flexDirection: orderType === 'options'? 'column' : 'row'}} >
            {optionItems}
        </div>
    </div>
  )
}

export default Type