import React from 'react';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Features from './components/features/Features';
import Calendar from './components/calendar/Calendar';
import Footer from './components/footer/Footer';
import './style.css';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Features/>
      <Calendar/>
      <Footer/>
    </>
);
}

export default App;
