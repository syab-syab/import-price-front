import React from 'react'
import { useState } from 'react'
import changeHowToSayJapanese from '../functions/changeHowToSayJapanese'
import ConversionRateListItem from './microparts/ConversionRateListItem'
import changeCurrencyUnit from '../functions/changeCurrencyUnit'

export const ConversionRate = ({tRate, yRate, lWRate, lMRate, codeKey}) => {

  const [price, setPrice] = useState(1)

	// const [yerterdayPrice, setYesterdayPrice] = useState(0)

	// const [lastWeekPrice, setLastWeekPrice] = useState(0)

	// const [lastMonthPrice, setLastMonthPrice] = useState(0)


	// それぞれの日時、期間のレート
  const todayRate = tRate
  
	const yesterdayRate = yRate

	const lastWeekRate = lWRate

	const lastMonthRate = lMRate

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
				日本円での値段 : </label>
				<input type="number" id="price-value" value={price} onChange={handleChange} className="
					border
					border-black
					text-center
				" />
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
				<ul className="
					bg-gray-200
					tracking-widest
				">
					<li className="
						text-left
					">
					この商品は{changeHowToSayJapanese(codeKey)}で
					<span className="
						changed-price-beta
						text-xl
						sm:text-4xl
					">
						{price * todayRate} {changeCurrencyUnit(codeKey)}
					</span>
					です！
					</li>
					<ConversionRateListItem period={"昨日"} price={price * yesterdayRate} todayPrice={price * todayRate} />
					<ConversionRateListItem period={"先週"} price={price * lastWeekRate} todayPrice={price * todayRate} />
					<ConversionRateListItem period={"先月"} price={price * lastMonthRate} todayPrice={price * todayRate} />

				</ul>
			</div>
		</div>     
  )
}

export default ConversionRate