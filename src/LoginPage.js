import React, { useState } from 'react'
import './LoginPage.css';
import validator from 'validator';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import image from './backgroundImage.jpg'
import { useHistory } from 'react-router-dom';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const loginButton=()=>{
        if(password===''|| email===''){
            alert('Please fill all field!!');
        }else{      
            if(password.length < 8){    
                alert('Password must be at least 8 characters!!');
            }else if(!validator.isEmail(email)){
                alert('Invalid Email!!')
            }
            else{
                alert('you successfully Logged-In');
                history.push('/home');
                setPassword('');
                setEmail('');
            }  
        } 
}
    return (
        <div className="mainContainerOfLogin">
            <div className="leftContainerOfLogin">
                <img src={image} alt="img"/>
            </div>
            <div className="rightContainerOfLogin">
                <div className="loginContainerOfLogin">
                    <h2>Welcome back!</h2>
                    <p>please login to your account.</p>
                </div>
                <br />
                <div className="inputContainerOfLogin">
                    <FormControl className='inputArea'>
                    <InputLabel htmlFor="my-input">email</InputLabel>
                    <Input id="my-input" type='email' value={email} onChange={event=>setEmail(event.target.value)}  aria-describedby="my-helper-text"/>    
                    </FormControl >
                    <br />
                    <FormControl className='inputArea'>
                    <InputLabel htmlFor="my-input">password</InputLabel>
                    <Input id="my-input" type="password" value={password} className="inputField" onChange={event=>setPassword(event.target.value)}  aria-describedby="my-helper-text" />    
                    </FormControl >
                </div>
                <br />
                <div className="forgotPasswordContainerOfLogin">
                    <div className="checkBoxArea">
                        <input type="checkbox" name="check"/>
                        <p>Remember me</p>
                    </div>
                    <p>Forgot Password?</p>
                </div>
                <br />
                <br />
                <button className="loginBtn" onClick={loginButton}>
                    Login
                </button>   
                <br />
                <br />
                <br />
                <p className="termCondition">Terms of use.Privacy policy</p>
            </div>
        </div>
    )
}
export default LoginPage
