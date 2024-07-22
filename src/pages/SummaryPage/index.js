import React,{useState} from 'react'

const SummaryPage = () => {
  const [checked,setChecked] = useState(false)
  return (
    <div>
      <form>
        <input 
          type='checkbox' checked ={checked} id='confrm-checkbox' onChange={(e)=> setChecked(e.target.checked) }/>{''}
          <label htmlFor='confrm-checkbox'>주문내역 확인해주세요</label>
          <br />
          <button  type='submit' disabled={!checked} >
            주문확인
          </button>
      </form>
    </div>
  )
}

export default SummaryPage