import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
// import useFetch from '../hooks/useFetch'
// import { useState } from 'react'
import testRates from '../data/test-data.json'

export const Main = () => {
  // const url = 'XXXX'
  const rates = testRates['test-rates']

  // const { data: rates, isLoaded, error } = useFetch(url);

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
        <ChoiceCode />
        <CurrentRate />
        <ConversionRate />
      </main>
      {/* { rates && console.log(rates.filter(element => element.payment_code === 'USD'))} */}
      { console.log(rates.filter(element => element.payment_code === 'USD')) }
    </>
  )
}

export default Main