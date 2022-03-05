import React from 'react'
import "../../../assets/css/sass/main.css"
import image from '../../../image/Map.png';
import Form from "../../../components/form/form"
import Auth from "../../../components/Auth/Auth"


 const Login = () => {
  return (
   <div className='loginContainer'>
      <div className='loginLeftSection'>
      
      <img className='loginLeftSection__image' src={image} alt="Logo"  />;
      </div>
    <div className='loginRightSection'>
    
    <Auth/>
    </div>
   </div>
    
   


  )
}

export default Login;
