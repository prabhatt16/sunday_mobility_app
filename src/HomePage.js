import React from 'react'
import './HomePage.css';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import image from './backgroundImage.jpg'

function HomePage() {

    return (
        <div className="mainContainerOfHome">
            <div className="leftContainerOfHome">
                <img src={image} alt="img"/>
            </div>
            <div className="rightContainerOfHome">
                <div className="homeContainer">
                    <h2>User List</h2>
                    <p>your account is here.</p>
                </div>

                <div className="userDetails">
                    <p>prabhattiwari20041@gmail.com</p>
                </div>                
                <div className="userDetails">
                    <p>prabhattiwari12345545@gmail.com</p>
                </div>                <div
                    div className="userDetails">
                    <p>prabhattiwari@gmail.com</p>
                </div>                
                <div className="userDetails">
                    <p>prabhat20041@gmail.com</p>
                </div>                
                <div className="userDetails">
                    <p>prabhatJay123321@gmail.com</p>
                </div>                
                <div className="userDetails">
                    <p>prabhattiwari20041@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default HomePage
