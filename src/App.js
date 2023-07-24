import './App.css';
// import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  // const [price, setPrice] = useState(0);

  // 現時点ではusd と jpy のレートのみ
  // あくまで仮置き
  // const usdRate = 0.0069313302;
  // const jpyRate = 144.272;

  // const handleChange = (e) => {
  //   setPrice(() => e.target.value)
  // }

  return (
    <div className="
      App
      text-center
      
      border
      border-black
      border-dashed
      bg-orange-100
    ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
