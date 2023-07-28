import React from 'react'
import { useState } from 'react'

export const ConversionRate = () => {

  const [price, setPrice] = useState(0);

  // 現時点ではusd と jpy のレートのみ
  // あくまで仮置き
  const usdRate = 0.00712105602060528;
  // const jpyRate = 144.272;

  const handleChange = (e) => {
    setPrice(() => e.target.value)
  }

  return (
		// メイン・JPY/**換算
		<div className="
			change-price-beta

			shadow-inner
		">
			<div className="
				mb-2
			">
				<label for="price-value" className="
					text-3xl
					font-bold
				">
				日本円での値段を入力してください。: </label>
				<input type="number" id="price-value" value={price} onChange={handleChange} className="
					border
					border-black
				" />
			</div>

			<p className="
				text-3xl
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
				text-3xl
				font-bold
			">
				<ul className="
					bg-gray-200
					tracking-widest
				">
					<li className="
						text-left
					">
					この商品は米ドルで
					<span className="
						changed-price-beta
						text-4xl
					">
						{price * usdRate}ドル
					</span>
					です！
					</li>
					<li className="
						text-left
					">
					昨日と比べて
					<span className="
						changed-price-beta
						text-4xl
					">
						0ドル
					</span>
					<span className="
						text-blue-600
					">
							お得
					</span>
					です！
					</li>
					<li className="
						text-left
					">
					先週と比べて
					<span className="
						changed-price-beta
						text-4xl
					">
						0ドル
					</span>
					<span className="
						text-red-600
					">
						損
					</span>
					です！
					</li>
					<li className="
						text-left
					">
					先月と比べて
					<span className="
						changed-price-beta
						text-blue-600
					">
							トントン
					</span>
					です！
					</li>
				</ul>
			</div>
		</div>     
  )
}

export default ConversionRate