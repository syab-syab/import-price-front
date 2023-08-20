import React from 'react'
import changeCurrencyUnit from '../functions/changeCurrencyUnit'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import flagName from '../data/currency-code.json'


export const CurrentRate = ({payCode, currentRate, codeKey, lastUpdate, currentRatesDate}) => {

	const countryCode = flagName['code']

	const flagCode = countryCode.filter(e => e.value === payCode)
	
	const flagClass = `fi fi-${flagCode[0].flag}`

  return (
		// メイン・現在のレート
		<div className="
			rate
			
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
				<span className="fi fi-jp"></span>
				JPY / {payCode} <span className={flagClass}></span> : {currentRate} {changeCurrencyUnit(codeKey)}
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