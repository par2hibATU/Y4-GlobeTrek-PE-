import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./list.css"
import Footer from '../../components/footer/Footer'
import Subscribe from '../mailList/Subscribe';
import { useLocation } from 'react-router-dom';



export const List = () => {
  const location = useLocation()

  return (
    <div><Navbar type = "list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in-date</label>
            
          </div>
        </div>
        <div className="listResult"></div>
      </div>
    </div>
    
    <Subscribe />
    <Footer />
    </div>
  )
}

export default List;

/*Timestamp at 1:09:15*/ 