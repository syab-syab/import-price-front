const changeCurrencyUnit = (code) => {
	switch (code) {
		case "USD":
			return "$"
		case "EUR":
			return "€"
		case "GBP":
			return "£"
		case "CHF":
			return "SwF"
		case "AUD":
			return "A$"
		case "TWD":
			return "NT$"
		case "NOK":
			return "NKr"
		case "CAD":
			return "Can$"
		case "INR":
			return "Rs"
		case "IDR":
			return "Rp"
		case "MYR":
			return "RM"
		case "SGD":
			return "S$"
		case "HKD":
			return "HK$"
		case "PHP":
			return "Php"
		case "THB":
			return "Bht"
		case "KRW":
			return "W"
		case "CNY":
			return "元"
		default:
			return "$"
	}
}

export default changeCurrencyUnit