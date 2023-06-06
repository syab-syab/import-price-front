// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 仮組み start */}
      <header>
        輸入品の価格チェック！
      </header>
      {/* 仮組み end */}
      <main>
        <form>
          <label>値段: </label>
          <input type="text"></input>
          <br />
          ↓↓↓
          <br />
          <p>この商品は米ドルで<strong>〇〇ドル</strong>です！</p>
          <p>昨日よりも〇〇ドル得しています！(得している場合は青か緑っぽい色)</p>
          <p>先週よりも〇〇ドル損しています！(損の場合は赤)</p>
          <p>半年前と同じです！(同じ場合はどうしよう)</p>
        </form>
      </main>
      <footer>
        <span>*このサイトの為替レートはUSD/JPYのBidの終値を用いて計算しています。</span>
      </footer>
    </div>
  );
}

export default App;
