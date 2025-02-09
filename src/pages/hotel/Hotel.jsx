import React from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className='hotelTitle'>Grand Hotel</h1>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default Hotel;