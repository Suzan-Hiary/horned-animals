import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
      <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
