import React from 'react'
import { useState } from 'react'
import changeCurrencyUnit from '../../functions/changeCurrencyUnit'

// 現在のレートで換算した値と日付とレートの配列を受け取って
// 選択された日付のレートと比較
const ConversionPastRate = ({currentPrice, convertPrice, selectDatesArr, selectRatesArr, codeKey}) => {

  const [arrIndex, setArrIndex] = useState(1)

  const datesArr = selectDatesArr

  const handleChange = (e) => {
    console.log(e.target.value)
    setArrIndex(e.target.value)
  }

  // let comparePricesClass = "text-green-400"
  // console.log(comparePricesClass)

  const changeSentence = (currentP, pastP) => {
    const tmp = currentP - pastP

    if (tmp > 0) {
      // comparePricesClass = "text-green-400"
      // return "の方が" + Math.abs(tmp) + changeCurrencyUnit(codeKey) + "高い"
      return <span>の方が<span className='text-red-400'>{Math.abs(tmp)}{changeCurrencyUnit(codeKey)}高い</span></span>
    } else if (tmp < 0) {
      // comparePricesClass = "text-blue-500"
      // return "の方が" + Math.abs(tmp) + changeCurrencyUnit(codeKey) + "安い"
      return <span>の方が<span className='text-green-400'>{Math.abs(tmp)}{changeCurrencyUnit(codeKey)}安い</span></span>

    } else if (tmp === 0) {
      // comparePricesClass = "text-red-500"
      // return "と同額"
      return <span className='text-blue-400'>と同額</span>
    }
  }

  return (
    <>				
      <div className="
        text-left
      ">
        <select
        name="code"
        id="code-select"
        value={arrIndex}
        onChange={handleChange}
        className="
        border
        border-black
        my-4
      ">
        {
          datesArr.map((value, index) => (
            // 先頭の値を表示させないようにしたかったけどif文要らなかった
            index !== 0 &&
            <option key={index} value={index}>{value}</option>
          ))
        }

      </select>
      での値段は
      <span>
        {selectRatesArr[arrIndex] * currentPrice} {changeCurrencyUnit(codeKey)}
      </span>
      <p className='
        md:text-xl
        text-base
        mt-3
      '>
        現在の値段 {changeSentence(convertPrice, selectRatesArr[arrIndex] * currentPrice)}
      </p>
      </div>
    </>
  )
}

export default ConversionPastRate