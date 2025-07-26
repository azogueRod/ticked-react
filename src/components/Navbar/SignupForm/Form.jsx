import React, { useState } from 'react'

const Form = () => {
const [form, setForm] = useState({
    name: "",
    age: "",
    address: "",
    zipCode: "",
    phone: ""
})
const handleClear = ()=> {    
    setForm(Object.keys(form).reduce((acc,key)=>{
        console.log(acc);
        
        acc[key] = "";
        return acc
    },{}))
    
}
const handleOnchangeInputs = (e)=> {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
    console.log(name, value)
}

const handleFormSubmit = (e)=> {
    
    e.preventDefault()
    console.log("submit form" ,form);
    
}
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="">Name
        <input type="text" name='name' value={form.name} onChange={handleOnchangeInputs} required />
      </label>
      <br/>
       <label htmlFor="">Age
        <input type="text" name= "age" value={form.age} onChange={handleOnchangeInputs} required/>
      </label>
            <br/>

      <label htmlFor="">Address
        <input type="text" name="address" value={form.address} onChange={handleOnchangeInputs} required/>
      </label>
            <br/>

      <label htmlFor="">Zip code
        <input type="text" name="zipCode" value={form.zipCode} onChange={handleOnchangeInputs} required/>
      </label>
            <br/>

      <label htmlFor="">Phone
        <input type="number" name="phone" value={form.phone} onChange={handleOnchangeInputs} required/>
      </label>
    <div>
        <button type='button' onClick={handleClear}>Clear</button>
        <button type="submit" >Submit</button>
    </div>
    </form>
  )
}

export default Form
