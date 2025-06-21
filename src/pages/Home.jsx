import React from 'react'
import Navbar from "../sections/Navbar";
import HeroSec from '../sections/HeroSec';
import DummyBlock from '../assets/DummyBlock';
import BlogSec from '../sections/BlogSec';
import FooterSec from '../sections/FooterSec';
import TopSec from '../sections/TopSec';
import RedirectCard from '../components/cards/RedirectCard';
export default function Home() {
  return (
    <div className="home-cont">
    <RedirectCard/>
    <Navbar navbarbtn1="navbar-btnactive"  navbarbtn2="navbar-btn"/>
    <HeroSec/>
    <TopSec/>
    <FooterSec/>
    </div>
  )
}
