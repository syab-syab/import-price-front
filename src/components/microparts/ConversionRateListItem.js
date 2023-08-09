import React from 'react'

// 昨日・先週・先月 とくらべて
// ***** ドル 高い=赤 安い=青(緑) 同じ=黄色
const ConversionRateListItem = ({period, price, todayPrice }) => {

  const toggleClass = (todayP, pastP) => {
    if (todayP < pastP) {
      return "text-green-500 text-xl sm:text-4xl"
    } else if (todayP > pastP) {
      return "text-red-600  text-xl sm:text-4xl"
    } else if (todayP === pastP) {
      return "text-yellow-500 text-xl sm:text-4xl"
    } else {
      return ""
    }
  }

  return (
    <>				
      <li className="
        text-left
      ">
      {period} は
      <span
      // className="
      //   changed-price-beta
      //   text-xl
      //   sm:text-4xl
      // "
      className={toggleClass(todayPrice, price)}>
        {price}
      </span>
      でした！
      </li>
    </>
  )
}

export default ConversionRateListItem