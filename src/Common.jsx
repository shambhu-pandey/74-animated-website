import React from "react"

import { NavLink } from "react-router-dom";

const Common = (props) =>{
  return (
    <>
    
    <section id = "header" className="d-flex align-items-center">
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
           <div className="col-md-6 pt-5 pt-lg-5  order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>{props.name} <br/>with <strong className="brand-name">pandey </strong></h1>
            <h2>{props.content}</h2>
            <h2 className="my-3">
              We are the team of talented developer
            </h2>
  

            <div className="mt-3">
              <NavLink to={props.visit} className="btn btn-outline-primary" >{props.btname}
              </NavLink>
            </div>
           </div>

           <div className="col-lg-6  order-1 order-lg-2 header-img">
            <img src = {props.imgsrc} className="img-fluid animated m-5  header-image" alt="home img" 
            style={{ height: props.imgHeight, width: props.imgWidth }}
            />
           </div>
           </div>
        </div>
      </div>
    </div>
    </section>
    </>
  );
};

export default Common;