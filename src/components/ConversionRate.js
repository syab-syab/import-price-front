import React from 'react'
import { useState } from 'react'
import changeHowToSayJapanese from '../functions/changeHowToSayJapanese'
import ConversionPastRate from './microparts/ConversionPastRate'
import changeCurrencyUnit from '../functions/changeCurrencyUnit'

export const ConversionRate = ({tRate, codeKey, datesArr, ratesArr}) => {

  const [price, setPrice] = useState(1)

	// const [yerterdayPrice, setYesterdayPrice] = useState(0)

	// const [lastWeekPrice, setLastWeekPrice] = useState(0)

	// const [lastMonthPrice, setLastMonthPrice] = useState(0)


	// それぞれの日時、期間のレート
  const todayRate = tRate

  const handleChange = (e) => {
    setPrice(() => e.target.value)
  }

  return (
		// メイン・JPY/**換算
		<div className="
			change-price-beta

			shadow-inner
			text-xl
			sm:text-3xl
		">
			<div className="
				mb-2
			">
				<label htmlFor="price-value" className="
					font-bold
				">
				値段 : </label>
				<input type="number" id="price-value" value={price} onChange={handleChange} className="
					border
					border-black
					text-center
				" />
				<span className='
					font-bold
				'>
					円
				</span>
			</div>

			<p className="
				font-bold
				mb-2
			">
			{/* 矢印がなんかダサいから変える */}
				↓↓↓
			</p>
			{/* メイン・JPY/**換算(結果) */}
			<div className="
				flex
				justify-center
				pb-2
				font-bold
				px-3
				sm:px-0
			">
				<div className="
					bg-gray-200
					tracking-widest
				">
					<div className="
						text-left
					">
						<p>
							この商品は{changeHowToSayJapanese(codeKey)}で
							<span className="
								changed-price-beta
								text-xl
								sm:text-4xl
							">
								{price * todayRate} {changeCurrencyUnit(codeKey)}
							</span>
						</p>
					</div>
					{/* ↓のコンポーネントに換算した値を渡す */}
					{/* 昨日とか過去のレートは渡さない */}
					<ConversionPastRate
					 currentPrice={price * todayRate}
					 selectDatesArr={datesArr}
					 selectRatesArr={ratesArr}
					/>

				</div>
			</div>
		</div>     
  )
}

export default ConversionRate