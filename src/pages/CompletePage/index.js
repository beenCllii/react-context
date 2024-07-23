import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../context/OrderContext'
import axios from 'axios';

const CompletePage = ({setStep}) => {

  const [orderData] = useContext(OrderContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() =>{
    ordercompleted(orderData);
  },[orderData])

  const ordercompleted = async (orderData) => {
    try{
      const response = await axios.post('http://localhost:4000/order',orderData);
      setOrderHistory(response.data);
      setLoading(false);
    }catch(error){
      console.log(error);
    }
  }

  if(loading){
    return <h1>Loading...</h1>
  }
  return (
    <div style={{textAlign:'center'}}>
    <h2>주문이 성공했습니다.</h2>
    <h3>지금까지 모든 주문</h3>
    <br />
    <button onClick={() => setStep(0)}>
      첫 페이지로
    </button>
    <table style={{margin:'auto', border:'1px solid black'}}>
      <tbody>
        <tr>
          <th>number</th>
          <th>price</th>
        </tr>
        {orderHistory.slice(0).reverse().map((item)=>{
          return(
            <tr key={item.orderNumber}>
              <td>{item.orderNumber}</td>
              <td>{item.price}</td>
            </tr>
            )
        })}
      </tbody>
    </table>
    </div>
  )
}

export default CompletePage