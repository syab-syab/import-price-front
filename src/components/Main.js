import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
// import useFetch from '../hooks/useFetch'
import { useState } from 'react'
import testRates from '../data/test-data.json'

export const Main = () => {
  // const url = 'XXXX'

  // 現在選択している通貨コード
  const [crCode, setCrCode] = useState('USD')

  // todayの全コードのrate
  const today_rates = testRates['test-rates'].filter(element => element.rate_period === "today")

  // todayの選ばれたコードのrate
  const today_code_rate = today_rates.filter(element => element.payment_code === crCode)[0].rate_val

  // last_weekの全コードのrate
  // const last_week_rates = testRates['test-rates'].filter(element => element.rate_period === "last_week")

  // last_monthの全コードのrate
  // const last_month_rates = testRates['test-rates'].filter(element => element.rate_period === "last_month")


  // const { data: rates, isLoaded, error } = useFetch(url);

  // 通貨コードを選択するたびにcrCodeを変える
  const handleChange = (e) => {
    setCrCode(e.target.value)
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
        {/* 多分type要らねえ */}
        <ChoiceCode type={crCode} method={handleChange} />
        <CurrentRate payCode={crCode} currentRate={today_code_rate} />
        {/* [TODO] ConversionRateに昨日、先週、先月のレートを渡す */}
        <ConversionRate value={today_code_rate} />
      </main>
      {/* { rates && console.log(rates.filter(element => element.payment_code === 'USD'))} */}
      {/* { console.log(val_rate) } */}
    </>
  )
}

export default Main