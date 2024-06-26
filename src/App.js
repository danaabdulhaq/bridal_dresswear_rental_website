
import React, { useState,useEffect} from 'react';
import './App.css';
import Home from './components/Pages/Home';
import Services from './components/Pages/Servess/Service';
import {  Route, Routes } from 'react-router-dom';
import Login from './components/Pages/LoginPage';
import Register from './components/Pages/RegisterPage';
import Contact from './components/Pages/ContactUs';
import Aboutus from './components/Pages/AboutUs'
import DisplayDresses from './components/PageDresses/DisplayDresses';
import DisplayFlowerss from './components/FlowersForBridel/DisplayFlowerss';
import DisplayCode from './components/Accessoriss/DisplayCode';
import Fback from './components/Pages/FeedbackPage/Fback';
import Preloader from './components/Preloader/Preloader'
import AccessoressTable from './components/AdminPage/AccessoressTable';
import BouquetTable from './components/AdminPage/BouquetTable';
import DressTable from './components/AdminPage/DressTable';

import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Massages from './components/AdminPage/Massages';
import HomeEdit from './components/AdminPage/HomeEdit';
import AboutUsEdite from './components/AdminPage/AboutUsEdite';
import ServessEdite from './components/AdminPage/ServessEdite';
import ContactEdite from './components/AdminPage/ContactEdite';
// import Dress from './components/AdminCP/Dress';
// import Accessoriess from './components/AdminCP/Accessoriess';
// import Bouquet from './components/AdminCP/Bouquet';
// import ACPRegister from './components/AdminCP/ACPRgister';
import image1 from './components/Slider/Images/s1.webp';
import dress from './components/Card-main/images/dress.jpg'
import earring from './components/Card-main/images/earring.jpg'
import flowers from './components/images/whiteFlower.jpg'



function App() {

  localStorage.setItem('adminEmail',"abc@gmail.com")
  localStorage.setItem('adminPass',"12345")
  localStorage.setItem('login',false)
  localStorage.setItem('name','')
  localStorage.setItem('phone','')
  localStorage.setItem('countEmail','')
  localStorage.setItem('text','')
  localStorage.setItem('slider',image1);
  localStorage.setItem('flowerImg',flowers)
  localStorage.setItem('DressImg',dress)
  localStorage.setItem('AccessImg',earring)



  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5300);
  }, []);


  
  return (
    <div className='App'>
    {loading ? (
  <div className="loader-container">
  <Preloader />
  </div>
  ):(
    <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/ContactUs" element={<Contact />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/AboutUs" element={<Aboutus />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/DisplayDress" element={<DisplayDresses/>}/>
            <Route path="/Displayaccessories" element={<DisplayCode />}/>
            <Route path="/DisplayFlower" element={<DisplayFlowerss/>}  />
            <Route path="/Fback" element={<Fback/>}  />
            <Route path="/ShoppingCart" element={<ShoppingCart/>}  />
            <Route path="/Login/Dress" element={<DressTable/>} />
            <Route path="/Login/Accessoriess" element={<AccessoressTable/>} />
            <Route path="/Login/Bouquet" element={<BouquetTable/>} />  
            <Route path="/Login/Massages" element={<Massages/>} />  
            <Route path="/Login/Home" element={<HomeEdit/>} />  
            <Route path="/Login/AboutUs" element={<AboutUsEdite/>} />  
            <Route path="/Login/Servess" element={<ServessEdite/>} />  
            <Route path="/Login/contactUs" element={<ContactEdite/>} />  
        </Routes>
  </div>)}
  </div>
  );
}
export default App;

