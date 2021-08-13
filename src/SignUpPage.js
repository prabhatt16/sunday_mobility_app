import React, { useState } from 'react'
import './SignUpPage.css';
import validator from 'validator';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import image from './backgroundImage.jpg'
import { useHistory } from "react-router-dom";

function SignUpPage() {
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const history = useHistory();

    const SignUpButton=()=>{
        if(name==='' || password===''|| email===''|| number===''){
            alert('Please fill all field!!');
        }else{
            if(password.length < 8){    
                alert('Password must be at least 8 characters!!');
            }else
            if(number.length == 9){
                alert("Mobile number contain only 10 digit");
            }else if(!validator.isEmail(email)){
                alert('Invalid Email!!')
            }else{
                alert('Welcome!!you successfully registered');
                history.push("/login");
                setpassword('');
                setEmail('');
                setName('');
                setNumber('');
            }  
        } 
    
    }

    return (
        <div className="mainContainerOfRegister">
            <div className="leftContainerOfRegister">
                <img src={image} alt="img"/>
            </div>
            <div className="rightContainerOfRegister">
                <div className="signUpContainerOfRegister">
                    <h2>Register</h2>
                    <p>please create your account.</p>
                </div>
                <br />
                <br />
                <div className="inputContainerOfRegister">
                    <FormControl className='inputArea'>
                    <InputLabel htmlFor="my-input">fullname</InputLabel>
                    <Input id="my-input" type="text" value={name} onChange={event=>setName(event.target.value)}  aria-describedby="my-helper-text"/>    
                    </FormControl >
                    <br />
                    <FormControl className='inputArea'>
                    <InputLabel htmlFor="my-input">contect number</InputLabel>
                    <Input id="my-input" type="number" value={number} onChange={event=>setNumber(event.target.value)}  aria-describedby="my-helper-text"/>    
                    </FormControl >
                    <br />
                    <FormControl className='inputArea'>
                    <InputLabel htmlFor="my-input">email</InputLabel>
                    <Input id="my-input" type="email" value={email} onChange={event=>setEmail(event.target.value)} aria-describedby="my-helper-text" required />    
                    </FormControl >
                    <br />
                    <FormControl className='inputArea'>
                    <InputLabel htmlFor="my-input">password</InputLabel>
                    <Input id="my-input" type="password" value={password} onChange={event=>setpassword(event.target.value)}  aria-describedby="my-helper-text"/>    
                    </FormControl >
                </div>
                <br />
                <br />
                <button className="signUpBtn" onClick={SignUpButton}>
                    Register
                </button>  
                <br />
                <p className="loginHeading" >have an account? <span style={{color:'#61acb3'}} onClick={()=>{history.push("/login")}}>login</span></p>
                <br />
                <br />
                {/* <p className="termCondition">Terms of use.Privacy policy</p> */}
            </div>
        </div>
    )
}
export default SignUpPage
