import React from 'react'
import { ChoiceCode } from './ChoiceCode'
import { CurrentRate } from './CurrentRate'
import ConversionRate from './ConversionRate'
// import useFetch from '../hooks/useFetch'
import { useState } from 'react'
// APIの容易が出来たらtestRatesはすべてuseFetchに修正する
import testRates from '../data/test-data.json'
import ConversionRateListItem from './microparts/ConversionRateListItem'
// import localStorageManage from '../functions/localStorageManage'

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

  let ymdArray = JSON.parse(localRateDataCheck)[0].updated.split('-')

  // new Dateで任意の日付を取得するには、月だけ-1の数値にする
  // apiの更新時間(予定では毎朝6時にするから余裕をもって一時間後の7時にする)
  // let tmpDate = new Date(Date.UTC(Number(ymdArray[0]), Number(ymdArray[1])-1, Number(ymdArray[2])+1))
  let tmpDate = new Date(Number(ymdArray[0]), Number(ymdArray[1])-1, Number(ymdArray[2])+1)
  let limitDate = tmpDate.getTime() + 25200000
  console.log("更新時間 = " + new Date(limitDate))
  // console.log(limitDate)

  let todayTmp = new Date()
  let todayDate = todayTmp.getTime()
  console.log("現在の時間 = " + todayTmp)

  console.log(limitDate <= todayDate)

  // 今日の日付とlimitDateをミリ秒に変換
  // 今日のミリ秒が大なりならlocalStrageのlocal-ratesを削除
  
  // 8/7 07:00 => 8/9 07:00  => 8/10 07:00 => 8/11 07:00 .....
  //      8/8 08:00 -> 8/9 9:00 -> 8/10 10:00 -> .....




  // vvvvvv レートのデータの期限の処理 vvvvvv

  if (!(localRateDataCheck)) {
    localStorage.setItem(rateKey, JSON.stringify(testRates['test-rates']))
    const tmp = localStorage.getItem(rateKey)
    localRateData = JSON.parse(tmp)
  } else {
    localRateData = JSON.parse(localRateDataCheck)
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
    console.log(crCode)
  }

  return (
    <>
      <main  className="
        bg-emerald-200
        
        mx-auto
        
        bg-opacity-30

        shadow-inner
        py-3
        sm:py-20
      ">
        <div>
          <p>更新時間 = {String(new Date(limitDate))}</p>
          <p>現在の時間 = {String(todayTmp)}</p>
        </div>
        <ChoiceCode type={crCode} method={handleChange} />
        <CurrentRate payCode={crCode} currentRate={today_code_rate} codeKey={localStorage.getItem(codeKey)} />
        {/* [TODO] ConversionRateに昨日、先週、先月のレートを渡す */}
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