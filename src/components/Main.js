import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'

export const Main = () => {
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
    </>
  )
}

export default Main