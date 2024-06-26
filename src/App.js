import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './Navbar'; // Import your custom Navbar component
import './App.css';
import CardComponent from './Card';

function App() {
    return (
        <div className="App">
            <Navbar/> {/* Include the Navbar component here */}
            <h1>CS 230L</h1>
            <h2>Section - 02</h2>
            <p>WVU ID: 800323659</p>
            <p>Hi I am Banafsheh Adami</p>
            <CardComponent />
        </div>
    );
}

export default App;