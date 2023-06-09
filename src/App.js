// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [price, setPrice] = useState(0);

  const rate = 0.0072;

  const handleChange = (e) => {
    setPrice(() => e.target.value)
  }

  return (
    <div className="App">
      {/* 仮組み start */}
      <header className="header">
        Import Price Checker(β)
      </header>
      {/* 仮組み end */}
      <main className="main">
        <div className="select-beta">
          {/* 本番ではaタグに直すかselectタグにする */}
          <span>USD</span>
          <span>EUR</span>
          <span>GBP</span>
          <span>CHF</span>
          <span>AUD</span>
          <span>KRW</span>
          <span>CNY</span>
        </div>
        <div className="rate">
          {/* <p>JPY / USD : 0.0072 $</p> */}
          <p>JPY / USD : {rate} $</p>
          <span className="red">この値はあくまで仮置きです。</span>
        </div>
        <div className="change-price-beta">
          <label>日本円での値段を入力してください。: </label>
          <input type="number" onChange={handleChange}></input>
          <br />
          ↓↓↓
          <br />
          <p>この商品は米ドルで<span className='changed-price-beta'>{price * rate}ドル</span>です！</p>
          {/* <p>昨日よりも<strong>〇〇ドル</strong>得しています！(得している場合は青か緑っぽい色)</p> */}
          {/* <p>先週よりも<strong>〇〇ドル</strong>損しています！(損の場合は赤)</p> */}
          {/* <p>半年前と同じです！(同じ場合はどうしよう)</p> */}
        </div>
      </main>
      <footer className="footer">
        <span className="red">*このサイトの為替レートはBidの終値を用いて計算しています。</span>
        <br />
        <span className="copyright">©輸入品チェック(仮)</span>
      </footer>
    </div>
  );
}

export default App;
