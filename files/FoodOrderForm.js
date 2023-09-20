import React, { useState } from "react";

function FoodOrderForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Successful!

Your order was ${order}.

Please show your confirmation number for pickup.`)
  }

return(
<div>
  <form>
    <label for='name'>Name</label>
      <input 
      className='input' 
      name ='name'
      id='name' 
      value={name} 
      onChange={(e) => setName(e.target.value)}></input>
    <label for='phone'>Phone</label>
      <input 
      className='input' 
      name='phone'
      id='phone' 
      value={phone} 
      onChange={(e) => setPhone(e.target.value)}></input>
    <label for='address'>Address</label>
      <input 
      className='input'
      name='address'
      id='address' 
      value={address} 
      onChange={(e) => setAddress(e.target.value)}></input>
    <label for='order'>Order</label>
      <input 
      className='input' 
      name='order'
      id='order' 
      value={order} 
      onChange={(e) => setOrder(e.target.value)}></input>
    <button 
    className='button'
    type='submit' 
    name='submitButton'
    id='submitButton' 
    onSubmit={handleSubmit}>Submit</button>
  </form>
</div>)
}

export default FoodOrderForm;