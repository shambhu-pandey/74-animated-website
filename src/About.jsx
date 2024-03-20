import React from "react"
import web from "../src/images/mobile-hand.webp"
import Common from "./Common";

const About = () =>{
  return (
    <>
    <Common
    name = "Vyapar is a FREE Business Accounting Software built for Indian small businesses!"
    content = "To deal with invoicing, inventory, accounting needs, and much more"
    imgsrc= {web}
    visit="/contact" 
    btname = "Contact Now"
    imgHeight="400px"
        imgWidth="800px" />
 
    </>
  );
};

export default About;