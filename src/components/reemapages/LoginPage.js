import Form from '../Form/Form';
import React from 'react';
import '../Textbox/Textbox.css';
import { Link } from 'react-router-dom';



const Login = ()=> { 
  
return (
<div className='register' >  
   <Form text= "Login to your account"> 
   <div className="form-outline mb-4">
        <input type="email" id="loginEmail" className="text-input" autoComplete='off' required/>
        <label className="label" for="loginName">Email</label>
      </div>
      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" className="text-input" autoComplete='off' required/>
        <label className="label" for="loginName">password</label>
      </div>
      <p className="mb-5 pb-lg-2" >Don't have an account? <Link to="/Register">Register here</Link></p>
                      
      
    </Form>

    </div> 

);




}


export default Login;