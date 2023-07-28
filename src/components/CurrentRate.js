import React from 'react'

export const CurrentRate = () => {
  return (
		// メイン・現在のレート
		<div className="
			rate
			mb-4
			py-3
			
			shadow-inner
		">
			{/* <p>USD / JPY : 144.272 円</p> */}
			<p className="
				text-3xl
				font-bold
				mb-2
			">
			{/* USDの部分は選択された通貨コードに変えること */}
				JPY / USD : 0.00712105602060528 $
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