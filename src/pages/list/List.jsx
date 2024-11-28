import React from 'react'
import Navbar from '../../components/navbar/Navbar';

import Footer from '../../components/footer/Footer'
import Subscribe from '../mailList/Subscribe';


export const List = () => {
  return (
    <div><Navbar/> 
    <Subscribe />
    <Footer />
    </div>
  )
}

export default List;
