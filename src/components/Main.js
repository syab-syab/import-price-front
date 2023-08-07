import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
// import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import testRates from '../data/test-data.json'

export const Main = () => {

  // -------------- 通貨コード -------------------------------------
  // ローカルストレージの通貨コード用のキー
  const codeKey = "payment-code"

  // 格納されていればその値が、無いならnullが格納される
  // useStateの代入に利用する
  let localPaymentCode = ""

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

  // ローカルストレージにデータがあるかどうか
  // あるならその値を格納、無いならnullが入る
  let localRateData = ""

  let localRateDataCheck = localStorage.getItem(rateKey)

  if (!(localRateDataCheck)) {
    localStorage.setItem(rateKey, JSON.stringify(testRates['test-rates']))
    const tmp = localStorage.getItem(rateKey)
    localRateData = JSON.parse(tmp)
  } else {
    localRateData = JSON.parse(localRateDataCheck)
  }

  console.log("localRateData = " + typeof(localRateData))


  // todayの全コードのrate
  const today_rates = localRateData.filter(element => element.rate_period === "today")

  // todayの選ばれたコードのrate
  const today_code_rate = today_rates.filter(element => element.payment_code === crCode)[0].rate_val

  // yesterdayの全コードのrate
  const yesterday_rates = localRateData.filter(element => element.rate_period === "yesterday")

  // yesterdayの選ばれたコードのrate
  const yesterday_code_rate = yesterday_rates.filter(element => element.payment_code === crCode)[0].rate_val

  
  // lastweekの全コードのrate
  const last_week_rates = localRateData.filter(element => element.rate_period === "last_week")

  // last_weekの選ばれたコードのrate
  const last_week_code_rate = last_week_rates.filter(element => element.payment_code === crCode)[0].rate_val


  // last_monthの全コードのrate
  const last_month_rates = localRateData.filter(element => element.rate_period === "last_month")

  // last_monthの選ばれたコードのrate
  const last_month_code_rate = last_month_rates.filter(element => element.payment_code === crCode)[0].rate_val


  // 通貨コードを選択するたびにcrCodeを変える
  const handleChange = (e) => {
    localStorage.setItem(codeKey, e.target.value)
    setCrCode(e.target.value)
    console.log(crCode)
  }

  return (
    <>
      <main  className="
        bg-emerald-200
        
        mx-auto
        
        bg-opacity-30

        shadow-inner
        py-3
        sm:py-20
      ">
        <ChoiceCode type={crCode} method={handleChange} />
        <CurrentRate payCode={crCode} currentRate={today_code_rate} codeKey={codeKey} />
        {/* [TODO] ConversionRateに昨日、先週、先月のレートを渡す */}
        <ConversionRate
          tRate={today_code_rate}
          yRate={yesterday_code_rate}
          lWRate={last_week_code_rate}
          lMRate={last_month_code_rate}
        />
      </main>
      {/* { rates && console.log(rates.filter(element => element.payment_code === 'USD'))} */}
      {/* { console.log(val_rate) } */}
    </>
  )
}

export default Main