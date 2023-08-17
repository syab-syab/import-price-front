import React from 'react'
import { useState } from 'react'

// 現在のレートで換算した値と日付とレートの配列を受け取って
// 選択された日付のレートと比較
// ***** ドル 高い=赤 安い=青(緑) 同じ=黄色
const ConversionPastRate = ({currentPrice, selectDatesArr, selectRatesArr}) => {

  const [arrIndex, setArrIndex] = useState(0)

  // const toggleClass = (todayP, pastP) => {
  //   if (todayP < pastP) {
  //     return "text-green-500 text-xl sm:text-4xl"
  //   } else if (todayP > pastP) {
  //     return "text-red-600  text-xl sm:text-4xl"
  //   } else if (todayP === pastP) {
  //     return "text-yellow-500 text-xl sm:text-4xl"
  //   } else {
  //     return ""
  //   }
  // }

  const arrayShift = (array) => {
    array.shift()
    console.log("shift")
    return array
  }

  const datesArr = arrayShift(selectDatesArr)

  const handleChange = (e) => {
    console.log(e.target.value)
    setArrIndex(e.target.value)
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
          // 選択するたびに配列が消えていく現象を治す
          datesArr.map((value, index) => (
            <option key={index} value={index}>{value}</option>
          ))
        }

      </select>
      での値段は
      <span
      // className="
      //   changed-price-beta
      //   text-xl
      //   sm:text-4xl
      // "
      // className={toggleClass(todayPrice, price)}
      >
        工事中
      </span>
      </div>
    </>
  )
}

export default ConversionPastRate