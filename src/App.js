// src/App.js import Features from './components/Features';
//import About from './components/About';
//import Testimonials from './components/Testimonials';
//import Footer from './components/Footer';


import React from 'react';
import './App.css';
import Header from './Header/Header';
import Hero from './HeroFolder/Hero';
import Advantages from './Advantages/Advantages';
import About from './About/About';
import Footer from './Footer/Footer';
import Lead from './Lead/Lead';
import Courses from './Courses/Courses';
import Testimonials from './Testimonials/Testimonials'
import Faq from './Faq/Faq';


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero />
            <Advantages/>
            <About/>
            <Courses/>
            <Lead/>
            <Testimonials/>
            <Faq/>
            <Footer/>
           
        </div>
    );
}

export default App;
