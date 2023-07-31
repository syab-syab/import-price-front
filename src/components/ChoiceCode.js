import React from 'react'
import currencyCode from '../data/currency-code.json'

// type要らないかも
export const ChoiceCode = ({type, method}) => {
  return (
    // メイン・通貨コード選択
    <div className="
      select-section
      mb-3
      
      font-bold

      shadow-inner
      text-xl
      sm:text-3xl
    ">
      <label htmlFor="code-select" className="
        my-2
      ">
        通貨コードを選んでください
      </label>
      <br />
      <select
        name="code"
        id="code-select"
        value={type}
        onChange={method}
        className="
        border
        border-black
        my-4
      ">
        {
          currencyCode["code"].map(value => (
            <option key={value.id} value={value.value}>{value.name}</option>
          ))
        }

      </select>
  </div>
  )
}