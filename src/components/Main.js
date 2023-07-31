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

  const rates = testRates['test-rates'].filter(element => element.rate_period === "today")

  const test = 777

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
        {/* [TODO]なぜかcrCodeで選択しているレートがとってこれないから要修正 */}
        {/* <CurrentRate payCode={crCode} currentRate={rates.filter(element => element.payment_code === crCode)} /> */}
        <CurrentRate payCode={crCode} currentRate={test} />
        <ConversionRate />
      </main>
      {/* { rates && console.log(rates.filter(element => element.payment_code === 'USD'))} */}
      { console.log(rates.filter(element => element.payment_code === crCode)) }
    </>
  )
}

export default Main