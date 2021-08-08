
import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  
  return (
    <div className="App">

      <Header />
     
      <Main />
      <Footer />
      <SelectedBeast />


    </div>
  );
}

export default App;
