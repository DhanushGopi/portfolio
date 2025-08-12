import React from 'react'
import Navbar from "../sections/Navbar";
import BlogSec from '../sections/BlogSec';
import FooterSec from '../sections/FooterSec';
export default function Danzuverse(){
    return(
        <div className="home-cont">
            <Navbar navbarbtn1="navbar-btn"  navbarbtn2="navbar-btnactive"/>
            <BlogSec/>
            <FooterSec/>
            </div>
    )
}