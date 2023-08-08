const changeHowToSayJapanese = (code) => {
	switch (code) {
		case "USD":
			return "米ドル"
		case "EUR":
			return "ユーロ"
		case "GBP":
			return "英ポンド"
		case "CHF":
			return "瑞フラン"
		case "AUD":
			return "豪ドル"
		case "NZD":
			return "乳ドル"
		case "NOK":
			return "諾クローネ"
		case "CAD":
			return "加ドル"
		case "INR":
			return "印ルピー"
		case "IDR":
			return "稲ルピア"
		case "MYR":
			return "馬リンギット"
		case "SGD":
			return "新ドル"
		case "HKD":
			return "香ドル"
		case "PHP":
			return "比ペソ"
		case "THB":
			return "泰バーツ"
		case "KRW":
			return "ウォン"
		case "CNY":
			return "元"
		default:
			return "ドル"
	}
}

export default changeHowToSayJapanese