import React, { useState } from 'react'

// JPY / xxx か xxx / jpyかを選ぶ

const SelectCombination = () => {
  const [selectCombi, setSelectcombi] = useState("JPY / XXX")

  const handleCombiChange = (e) => {
    setSelectcombi(e.target.value)
  }

  return (
    <div className='
      font-bold
      mb-5
    '>
      <div>
        <input
          id="default-radio-1"
          type="radio"
          value="JPY / XXX"
          name="black"
          checked={selectCombi === "JPY / XXX"}
          onChange={handleCombiChange}
          className="
            w-4
            h-4
            accent-black
          " />
        <label
          htmlFor="default-radio-1"
          className=""
        >
          JPY / XXX
        </label>
      </div>
      <div>
          <input
            id="default-radio-2"
            type="radio"
            value="XXX / JPY"
            name="default-radio"
            checked={selectCombi === "XXX / JPY"}
            onChange={handleCombiChange}
            className="
            w-4
            h-4
            accent-black
          " />
          <label
            htmlFor="default-radio-2"
            className=""
          >
              XXX / JPY
            </label>
      </div>
    </div>
  )
}

export default SelectCombination