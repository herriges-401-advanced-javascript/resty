import React from 'react';
import './reset.css';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
