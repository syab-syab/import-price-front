import React from 'react'
import changeCurrencyUnit from '../functions/changeCurrencyUnit'

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
			<p className="
				font-bold
				mb-2
			">
				{/* 通貨コードの脇に小さく国旗の画像を見えるようにしたい */}
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