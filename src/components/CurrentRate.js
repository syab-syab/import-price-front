import React from 'react'

export const CurrentRate = () => {
  return (
        // メイン・現在のレート
        <div className="
        rate
        mb-4
        py-3

        border-b
        border-black
        border-dashed

        ">
            {/* <p>USD / JPY : 144.272 円</p> */}
            <p className="
            text-3xl
            font-bold
            mb-2
            ">
            {/* USDの部分は選択された通貨コードに変えること */}
                JPY / USD : 0.0069313302 $
            </p>
            <span className="
            text-xl
            text-red-600
            ">
                *この値はあくまで仮置きです。
            </span>
        </div>
  )
}