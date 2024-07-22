import React from 'react'

const Products = ({name, imagePath}) => {

const handle = (event) => {
  cont
}

  return (
    <div style={{textAlign:'center'}}>
      <img style={{width:'75%'}} src={`http://localhost:4000/${imagePath}`} alt={`${name}_roducts`} />
      <form style={{marginTop:'10px'}}>
        <label style={{textAlign:'center'}}>{name}</label>
        <input style={{marginLeft:'7px'}} type='number' 
                name='quantity' min='0' defaultValue={0} onChange={handle}/>
      </form>
    </div>
    
  )
}

export default Products