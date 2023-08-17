import React from 'react'
import changeCurrencyUnit from '../functions/changeCurrencyUnit'
import "/node_modules/flag-icons/css/flag-icons.min.css"

export const CurrentRate = ({payCode, currentRate, codeKey, lastUpdate, currentRatesDate}) => {

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
			<p className='
				font-bold

				mb-2
			'>
				現在のレート
			</p>
			{/* <p>USD / JPY : 144.272 円</p> */}
			<p className="
				font-bold
				mb-2
			">
			{/* USDの部分は選択された通貨コードに変えること */}
				{/* JPY / USD : 0.00712105602060528 $ */}
				{/* 通貨コードの脇に小さく国旗の画像を見えるようにしたい */}
				<span className="bg-[linear-gradient(180deg,_#ABCAE9_35%,_#FFF_35%_40%,_#000000_40%_60%,_#FFF_60%_65%,_#ABCAE9_65%)]">;</span>
				{/* <span>

				</span>
				 */}
				JPY / {payCode} : {currentRate} {changeCurrencyUnit(codeKey)}
			</p>
			<span className="
				text-xl
				text-red-600
			">
				*この値は{currentRatesDate}のものです。
			</span>
			<p className='
				font-bold
				text-base
			'>
				最終更新：{lastUpdate}
			</p>
		</div>
  )
}