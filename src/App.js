import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Teachershub from './components/Teachershub/Teachershub';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Teachershub></Teachershub>
      <Footer></Footer>
    </div>
  );
}

export default App;
