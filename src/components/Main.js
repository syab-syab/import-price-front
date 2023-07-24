import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'

export const Main = () => {
  return (
    <>
    <main  className="
      bg-emerald-200
      container
      mx-auto
      text-2xl
      py-20

    ">
        <ChoiceCode />
        <CurrentRate />
        <ConversionRate />
    </main>
    </>
  )
}

export default Main