import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
import useFetch from '../hooks/useFetch'
import { useState } from 'react'
// APIの用意が出来たらtestRatesはすべてuseFetchに修正する
// テストデータ↓
import testRates2 from '../data/test-data2.json'
import RateChart from './RateChart'

export const Main = () => {

  // -------------- 通貨コード -------------------------------------
  // ローカルストレージの通貨コード用のキー
  const codeKey = "payment-code"

  // 格納されていればその値が、無いならnullが格納される
  // useStateの代入に利用する
  let localPaymentCode = ""

  // localStrageに何も入ってなければ
  // 初期値は USD を入れておく
  if (!(localStorage.getItem(codeKey))) {
    localStorage.setItem(codeKey, "USD")
    localPaymentCode = localStorage.getItem(codeKey)
  } else {
    localPaymentCode = localStorage.getItem(codeKey)
  }

  // 現在選択している通貨コード
  const [crCode, setCrCode] = useState(localPaymentCode)


  // -------------------------- レート -------------------------------------------------------


  // REST API から取ってきたデータを
  // ローカルストレージに格納する用のkey
  const rateKey = "local-rates"
  // console.log(rateKey)

  // データを格納する用の変数
  let localRateData = ""


  // 有効期限を格納用のキー
  const validPeriodKey = "valid-period"
  // なお初回アクセス時にはローカルに有効期限は存在しない点に注意
  // ローカルに存在するかどうかのチェック

  // ^^^^^^ ここからデータ更新の処理 ^^^^^^^^^

  // [重要]レートの値を更新するタイミングについて
  //     ┃
  //     ┣━ 1. ローカルストレージにレートのデータ(local-rates)が存在しない時(更新というより格納)
  //     ┃
  //     ┣━ 2. ローカルストレージに有効期限(valid-period)が存在しない時
  //     ┃
  //     ┣━ 3. ローカルストレージに存在する有効期限(valid-period)がアクセス時の日時を超過している時
  //     ┃
  //     ┗━ 以上3つのうちいずれかの一つでも条件を満たした時にAPIと通信してローカルの値を更新する

  //     if (1 || 2 || 3) {
  //       通信してレートの値(local-rates)を更新(初期化)
  //       有効期限の値(valid-period)を更新(初期化)
  //     } else {
  //       通信せずレートの値そのまま維持
  //       有効期限そのまま維持(更新する手もある)
  //     }


  // 新テストデータ
  // カンマ(,)で区切られたレートと日付を配列に直す
  const new_test_data = testRates2["test-rates"]

  localStorage.setItem(rateKey, JSON.stringify(new_test_data))

  // vvvvvvvvv ここ以降はデータの加工だから更新には関わらない vvvvvvvvvvvv



  console.log("usefetch直前")
  // const { data: rates, isLoaded, error } = useFetch(process.env.REACT_APP_API_URL, rateKey, validPeriodKey);
  const { data: rates, isLoaded, error } = useFetch(process.env.REACT_APP_API_URL, "use-fetch-test", validPeriodKey);
  console.log(error)
  console.log(isLoaded)
  console.log(rates)

  // 選択された通貨コードから通貨レートを取得し配列に直す
  // localStorage.setItem(rateKey, JSON.stringify(rates))
  localRateData = JSON.parse(localStorage.getItem(rateKey))
  // localRateData = JSON.parse(rates)

  console.log("localRateData vvv")
  console.log(localRateData)
  // 通信テスト
  // localRateData = JSON.parse(localStorage.getItem("usefetch-test"))

  const crCode_data = localRateData.filter(e => e.payment_code === crCode)[0]
  

  // 選択されたコードのレートを配列に直す
  // 配列の一番初めのレートを現在のレートとして切り出すこと(要parseFloat())
  const rates_crCode = crCode_data.rate_val.split(",")

  // 選択されたコードのレートに対応した日付の配列
  // 一番初めの文字列がレートの配列の最初の値に対応する感じで後に続く値も同じように扱う(型変換不要)
  const date_array_crCode = crCode_data.rate_dates.split(",")

  // 選択されたコードのレートの更新日
  const last_update_date_crCode = crCode_data.updated

  // 通貨コードを選択するたびにcrCodeを変えて
  // localStrageの値も変える
  const handleChange = (e) => {
    localStorage.setItem(codeKey, e.target.value)
    // setCrCode(e.target.value[0])
    setCrCode(localStorage.getItem(codeKey))
    console.log(crCode)
  }

  // ConversionRateに渡すためにレートの配列をすべてfloatに変える
  const conversionArrayFloat = (arr) => {
    let array = []
    arr.forEach(e => {
      array.push(parseFloat(e))
    })
    return array
  }

  return (
    <>
      {/* <p>{process.env.REACT_APP_HELLO_WORLD}</p> */}
      {/* <a href={process.env.REACT_APP_API_URL}>LINK</a> */}
      <main  className="
        bg-orange-100
        text-yellow-900
        
        mx-auto
        
        bg-opacity-30

        shadow-inner
        py-3
        sm:py-20
      ">
        {/* 本番環境用に data: rates, isLoaded, error の真偽値で表示を変えるように直す　*/}
        { error && <div>エラー</div> }
        { isLoaded && <div>Now Loading...</div>}
        
        { rates && <ChoiceCode type={crCode} method={handleChange} />}
        { rates && <CurrentRate
          payCode={crCode}
          currentRate={parseFloat(rates_crCode[0])}
          codeKey={localStorage.getItem(codeKey)}
          lastUpdate={last_update_date_crCode}
          currentRatesDate={date_array_crCode[0]}
        /> }
        {rates && <RateChart
          payCode={crCode}
          ratesArr={conversionArrayFloat(rates_crCode)}
          dateArr={date_array_crCode}
        /> }
        {/* [TODO] ConversionRateに日付とレートの配列を渡す */}
        {rates && <ConversionRate
          tRate={parseFloat(rates_crCode[0])}
          codeKey={localStorage.getItem(codeKey)}
          // 先頭の日付は現在のレートの日付だから削除
          datesArr={date_array_crCode}
          ratesArr={conversionArrayFloat(rates_crCode)}
        />}
      </main>
    </>
  )
}

export default Main