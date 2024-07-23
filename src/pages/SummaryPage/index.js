import React,{useContext, useState} from 'react'
import { OrderContext } from '../../context/OrderContext';

const SummaryPage = ({setStep}) => {
  const [checked,setChecked] = useState(false);

  const [orderDetails] = useContext(OrderContext);

  const products = Array.from(orderDetails.products);
  const productsList = products.map(([key,value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ))

  const hasOptions = orderDetails.options.size > 0;
  let optionsDisplay = null;
  if(hasOptions){
    const optionsArray = Array.from(orderDetails.options);
    const optionsList = optionsArray.map(([key,value]) => (<li key={key}>{key}</li>));
    optionsDisplay = (
      <>
        <h2>옵션 : {orderDetails.totals.options}</h2>
        <ul>{optionsList}</ul>
      </>
    )
  }

  const handleSubmit = (e) =>{
    e.preventDefault(); // 페이지 자동 리프레시 방지
    setStep(2);
  }
  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품 : {orderDetails.totals.products}</h2>
      <ul>
        {productsList}
      </ul>
      {optionsDisplay}
      <form onSubmit={handleSubmit}>
        <input 
          type='checkbox' checked ={checked} id='confrm-checkbox' onChange={(e)=> setChecked(e.target.checked) }/>{''}
          <label htmlFor='confrm-checkbox'>주문내역 확인해주세요</label>
          <br />
          <button  type='submit' disabled={!checked}>
            주문확인
          </button>
      </form>
    </div>
  )
}

export default SummaryPage