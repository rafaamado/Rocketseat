import React from 'react';
import './styles.css';

 const navigation = () => (
    <div className="navbar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <div className="dropdown">
            <button className="dropbtn">
                Dropdown &#10095;<i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    </div>
 );



 export default navigation;