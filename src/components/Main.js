import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
// import useFetch from '../hooks/useFetch'
import { useState } from 'react'
// APIの容易が出来たらtestRatesはすべてuseFetchに修正する
import testRates from '../data/test-data.json'
// import ConversionRateListItem from './microparts/ConversionRateListItem'
// import localStorageManage from '../functions/localStorageManage'
import SelectCombination from './SelectCombination'
import SelectFourValues from './SelectFourValues'

export const Main = () => {

  // -------------- 通貨コード -------------------------------------
  // ローカルストレージの通貨コード用のキー
  const codeKey = "payment-code"

  // 格納されていればその値が、無いならnullが格納される
  // useStateの代入に利用する
  let localPaymentCode = ""

  // localStrageに何も入ってなければ
  // 初期値は USD を入れておく
  if (!(localStorage.getItem(codeKey))) {
    localStorage.setItem(codeKey, "USD")
    localPaymentCode = localStorage.getItem(codeKey)
  } else {
    localPaymentCode = localStorage.getItem(codeKey)
  }

  // 現在選択している通貨コード
  const [crCode, setCrCode] = useState(localPaymentCode)


  // -------------------------- レート -------------------------------------------------------

  // REST API から取ってきたデータを
  // ローカルストレージに格納する用のkey
  // const rateKey = "local-rates"
  // const { data: rates, isLoaded, error } = useFetch(url, rateKey);

  // **** まだAPIの準備ができていないのでtest-data.jsonかデータ持ってくる  *****

  const rateKey = "local-rates"

  // データを格納する用の変数
  let localRateData = ""

  // ローカルストレージにデータがあるかどうか
  // あるならその値を格納され、無いならnullが入る
  // 真偽値のチェックにも使える
  let localRateDataCheck = localStorage.getItem(rateKey)

  // ^^^^^ レートのデータの期限の処理(後々別ファイルに切り出す) ^^^^^^

  // 4時間ごとにレートを取得し直す
  // 0:00, 4:00, 8:00, 12:00, 16:00, 20:00, 24:00(0:00)
  // 時間が↑のいずれかに該当するとき"local-rates"の値を削除

  const timeCheck = () => {
    const limitTime = [0, 4, 8, 12, 16, 20, 24]
    const now = new Date()
    // 時間だけだとその時間(Hour)以内では何度も更新してしまうので
    // 他にも条件を付ける
    // 例えば年、日付、分
    // 最後に更新した日付と時間をローカルに入れとくといいかもしれない
    if (limitTime.includes(now.getHours())) {
      return true
    } else {
      return false
    }
  }


  // vvvvvv レートのデータの期限の処理 vvvvvv

  if (!(localRateDataCheck) || timeCheck()) {

    localStorage.setItem(rateKey, JSON.stringify(testRates['test-rates']))
    const tmp = localStorage.getItem(rateKey)
    localRateData = JSON.parse(tmp)
    console.log("ローカル削除+格納")
  } else {
    localRateData = JSON.parse(localRateDataCheck)
    console.log("ローカル維持")
  }

  // console.log("localRateData = " + typeof(localRateData))


  // todayの全コードのrate
  const today_rates = localRateData.filter(element => element.rate_period === "today")

  // todayの選択された通貨コードのrate
  const today_code_rate = today_rates.filter(element => element.payment_code === crCode)[0].rate_val

  // yesterdayの全コードのrate
  const yesterday_rates = localRateData.filter(element => element.rate_period === "yesterday")

  // yesterdayの選択された通貨コードのrate
  const yesterday_code_rate = yesterday_rates.filter(element => element.payment_code === crCode)[0].rate_val
  
  // lastweekの全コードのrate
  const last_week_rates = localRateData.filter(element => element.rate_period === "last_week")

  // last_weekの選択された通貨コードのrate
  const last_week_code_rate = last_week_rates.filter(element => element.payment_code === crCode)[0].rate_val


  // last_monthの全コードのrate
  const last_month_rates = localRateData.filter(element => element.rate_period === "last_month")

  // last_monthの選択された通貨コードのrate
  const last_month_code_rate = last_month_rates.filter(element => element.payment_code === crCode)[0].rate_val


  // 通貨コードを選択するたびにcrCodeを変えて
  // localStrageの値も変える
  const handleChange = (e) => {
    localStorage.setItem(codeKey, e.target.value)
    setCrCode(e.target.value)
    // console.log(crCode)
  }

  return (
    <>
      <main  className="
        bg-orange-100
        text-yellow-900
        
        mx-auto
        
        bg-opacity-30

        shadow-inner
        py-3
        sm:py-20
      ">
        <SelectCombination />
        <ChoiceCode type={crCode} method={handleChange} />
        <CurrentRate payCode={crCode} currentRate={today_code_rate} codeKey={localStorage.getItem(codeKey)} />
        {/* [TODO] ConversionRateに昨日、先週、先月のレートを渡す */}
        <SelectFourValues />
        <ConversionRate
          tRate={today_code_rate}
          yRate={yesterday_code_rate}
          lWRate={last_week_code_rate}
          lMRate={last_month_code_rate}
          codeKey={localStorage.getItem(codeKey)}
        />
      </main>
    </>
  )
}

export default Main