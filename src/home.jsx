import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import Body from './body';
import Contact from "./contact"
import "./home.css";
import {BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import Courses from './courses';

class Home extends Component {
    render() { 
        return (
        
            <div className='home'>
                <Router>
                <Header/>
                <Body/>
                <Courses/>
                <Contact/>
                <Footer/>                
            </Router>
            
            </div>
            
            
        );
        
    }
    
    
    

}

export default Home;




