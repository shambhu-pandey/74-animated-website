import React from "react";

import Card from "./Card";
import CardData from "./CardData";  // api call kar lete rhta toh abhi hm api ke jagah par array of object bna kar data rkhe hai 

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            
             {/* map method use kar ke sabhi api ko call kar liye ya array of object ko  */}
            {
              CardData.map((val , index) =>{
                return <Card 
                 imgsrc = {val.imgsrc}
                 title = {val.title}
                />
              })
            }
            
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
