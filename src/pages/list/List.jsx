import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./list.css"
import Footer from '../../components/footer/Footer'
import Subscribe from '../mailList/Subscribe';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';



export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)



  return (
    <div><Navbar type = "list"/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input placeholder={destination} type="text" />
          </div>
          <div className="lsItem">
            <label>Check-in-date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            {openDate && ( <DateRange onChange={(item) => setDate([item.selection])} 
            minDate={new Date()} 
            ranges={date}/>)}
          </div>
          <div className="lsItem">
            <label>Options</label>
            <div className="lsOptionItem">
              <span className="lsOptionText">Min price <small>per night</small></span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Max price <small>per night</small></span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Adult</span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">Children</span>
              <input type='number' className='lsOptionInput'/>
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">room</span>
              <input type='number' className='lsOptionInput'/>
            </div>
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

