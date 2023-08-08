import React from 'react'
import changeCurrencyUnit from '../functions/changeCurrencyUnit'

export const CurrentRate = ({payCode, currentRate, codeKey}) => {

  return (
		// メイン・現在のレート
		<div className="
			rate
			mb-4
			py-3
			shadow-inner
			text-xl
			sm:text-3xl
		">
			{/* <p>USD / JPY : 144.272 円</p> */}
			<p className="
				font-bold
				mb-2
			">
			{/* USDの部分は選択された通貨コードに変えること */}
				{/* JPY / USD : 0.00712105602060528 $ */}
				JPY / {payCode} : {currentRate} {changeCurrencyUnit(codeKey)}
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