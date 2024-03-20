import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
   
  const [data , setData] = useState({
    fullname : "",
    phone :"",
    email : "",
    pincode : ""
  })

  const InputEvent =(event) => {
    const {name , value} = event.target;
 
    // is se pahle jo bhi tha usko access karna chah rha hu mai 
    setData((preVal)=>{
     return {
      ...preVal ,
      [name] : value,
     };
    });
  };
  
  const formSubmit = (event) => {
   event.preventDefault();
   alert(`My name is ${data.fullname} . My mobile no is ${data.phone} .Email is ${data.email} and Pincode is ${data.pincode} `)

   setData({
  
      fullname : "",
      phone :"",
      email : "",
      pincode : ""
    })
   }
  
  return (
    <section id="contact" className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center mb-4">
          <h1 style={{color:"#3d7dda"}} className="py-5">Become a Vyapar Partner & earn upto 1 Lakh per month<br/> <strong className="brand-name"> </strong></h1>
          </div>
          <div className="mb-3 py-2">
            <h2 className="my-4"> ➡️ Zero investment and no infrastructure required</h2>
            <h2> ➡️ Payment settlements every week</h2>
          </div>
          <div>
            <NavLink to="./Services." className="btn btn-primary">Submit Details</NavLink>
          </div>
        </div>
        <div className="col-md-6 my-5">
          <form onSubmit={formSubmit}>

            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input 
              type="text" 
              className="form-control" 
              id="fullName" 
              name = "fullname"
              value = {data.fullname}
              onChange={InputEvent}
              placeholder="Enter your Name" />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input 
              type="number" 
              className="form-control" 
              id="phone" 
              name = "phone"
              value = {data.phone }
              onChange={InputEvent}
              placeholder="Mobile Number" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
              type="email" 
              className="form-control"
               id="email" 
               name = "email"
              value = {data.email }
              onChange={InputEvent}
               placeholder="name@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="pinCode" className="form-label">Pin Code</label>
              <input 
              type="text" 
              className="form-control" 
              id="pinCode" 
              name = "pincode"
              value = {data.pincode }
              onChange={InputEvent}
              placeholder="Enter Pin Code" />
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
