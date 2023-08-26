import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
// import useFetch from '../hooks/useFetch'
import { useState } from 'react'
// APIの容易が出来たらtestRatesはすべてuseFetchに修正する
// import testRates from '../data/test-data.json'
// 新テストデータ↓
import testRates2 from '../data/test-data2.json'
// import "/node_modules/flag-icons/css/flag-icons.min.css";
import RateChart from './RateChart'
import validTimeCreate from '../functions/validTimeCreate'
import createCurrentUnixTime from '../functions/createCurrentUnixTime'

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
  // const rateKey = "local-rates"
  // const { data: rates, isLoaded, error } = useFetch(url, rateKey);

  // **** まだAPIの準備ができていないのでtest-data.jsonかデータ持ってくる  *****

  const rateKey = "local-rates"
  // console.log(rateKey)

  // データを格納する用の変数
  let localRateData = ""

  // ローカルストレージにデータがあるかどうか
  // あるならその値を格納され、無いならnullが入る
  // 真偽値のチェックにも使える
  // let localRateDataCheck = localStorage.getItem(rateKey)

  // ^^^^^ レートのデータの期限の処理(後々別ファイルに切り出す) ^^^^^^

  // 一定時間ごとにレートを取得し直す
  // 6:00, 12:00, 18:00, 20:00
  // 時間が↑のいずれかに該当するとき"local-rates"の値を削除

  // 現在の日時を取得する
  // 取得した値からhourだけ配列の中のもので一番近いのを代入して
  // 有効期限としてローカルに保存(無ければその日の23時59分59秒を Date(20**, *, *, 23, 59, 59))
  // キーは valid period
  // 次回アクセスした際にその時間を超過していたらデータ更新
  // もしかしたらunix時間にした方がいいかも
  // なお初回アクセス時にはローカルに存在しない点に注意

  const validPeriodKey = "valid-period"
  // ローカルに存在するかどうかのチェック(trueならそのまま値を入れる)
  const validCheck = localStorage.getItem(validPeriodKey)

  // 有りでも無しでもどっちみちローカルに格納する
  if (validCheck) {
    console.log(validPeriodKey + "有り")
    console.log(validCheck)
    localStorage.setItem(validPeriodKey, validTimeCreate())
  } else {
    console.log(validPeriodKey + "無し")
    localStorage.setItem(validPeriodKey, validTimeCreate())
  }


  console.log(parseInt(localStorage.getItem(validPeriodKey)))
  console.log(createCurrentUnixTime())
  console.log(parseInt(localStorage.getItem(validPeriodKey)) > createCurrentUnixTime())

  // parseInt(validCheck) < createCurrentUnixTime()になったら更新




  // vvvvvv レートのデータの期限の処理 vvvvvv

  // if (!(localRateDataCheck) || timeCheck()) {
  //   localStorage.setItem(rateKey, JSON.stringify(testRates2['test-rates']))
  //   const tmp = localStorage.getItem(rateKey)
  //   localRateData = JSON.parse(tmp)
  //   console.log("ローカル削除+格納")
  // } else {
  //   localRateData = JSON.parse(localRateDataCheck)
  //   console.log("ローカル維持")
  // }

  // console.log("localRateData = " + typeof(localRateData))

  // 新テストデータ
  // カンマ(,)で区切られたレートと日付を配列に直す
  const new_test_data = testRates2["test-rates"]

  localStorage.setItem(rateKey, JSON.stringify(new_test_data))

  // 選択された通貨コードから通貨レートを取得し配列に直す
  localRateData = JSON.parse(localStorage.getItem(rateKey))
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
        <ChoiceCode type={crCode} method={handleChange} />

        <CurrentRate
          payCode={crCode}
          currentRate={parseFloat(rates_crCode[0])}
          codeKey={localStorage.getItem(codeKey)}
          lastUpdate={last_update_date_crCode}
          currentRatesDate={date_array_crCode[0]}
        />
        <RateChart
          payCode={crCode}
          ratesArr={conversionArrayFloat(rates_crCode)}
          dateArr={date_array_crCode}
        />
        {/* [TODO] ConversionRateに日付とレートの配列を渡す */}
        <ConversionRate
          tRate={parseFloat(rates_crCode[0])}
          codeKey={localStorage.getItem(codeKey)}
          // 先頭の日付は現在のレートの日付だから削除
          datesArr={date_array_crCode}
          ratesArr={conversionArrayFloat(rates_crCode)}
        />

      </main>
    </>
  )
}

export default Main