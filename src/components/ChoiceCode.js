import React from 'react'

export const ChoiceCode = () => {
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
      <label for="code-select" className="
        my-2
      ">
        通貨コードを選んでください
      </label>
      <br />
      <select name="code" id="code-select" className="
        border
        border-black
        my-4
      ">
        <option value="">USD(アメリカ)</option>
        <option value="">EUR(ヨーロッパ)</option>
        <option value="">GBP(イギリス)</option>
        <option value="">CHF(スイス)</option>
        <option value="">AUD(オーストラリア)</option>
        <option value="">NZD(ニュージーランド)</option>
        <option value="">NOK(ノルウェー)</option>
        <option value="">CAD(カナダ)</option>
        <option value="">INR(インド)</option>
        <option value="">IDR(インドネシア)</option>
        <option value="">MYR(マレーシア)</option>
        <option value="">SGD(シンガポール)</option>
        <option value="">HKD(香港)</option>
        <option value="">PHP(フィリピン)</option>
        <option value="">THB(タイ)</option>
        <option value="">KRW(韓国)</option>
        <option value="">CNY(中国)</option>
      </select>
  </div>
  )
}