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
			text-xl
			sm:text-3xl
		">
			<div className="
				mb-2
			">
				<label htmlFor="price-value" className="
					font-bold
				">
				日本円での値段を入力してください。: </label>
				<input type="number" id="price-value" value={price} onChange={handleChange} className="
					border
					border-black
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
					この商品は米ドルで
					{/* コンポーネント化する */}
					<span className="
						changed-price-beta
						text-xl
						sm:text-4xl
					">
						{price * usdRate}ドル
					</span>
					{/* コンポーネント化する・end */}
					です！
					</li>
					<li className="
						text-left
					">
					昨日と比べて
					{/* コンポーネント化する */}
					<span className="
						changed-price-beta
						text-xl
						sm:text-4xl
					">
						0ドル
					</span>
					{/* コンポーネント化する・end */}
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
					{/* コンポーネント化する */}
					<span className="
						changed-price-beta
						text-xl
						sm:text-4xl
					">
						0ドル
					</span>
					{/* コンポーネント化する・end */}
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