import createDatetimeArray from "./createDatetimeArray"
import createUnixTime from "./createUnixTime"

// ローカルに存在するレートのデータの期限をUNIX時間で設定
const validTimeCreate = () => {
    // 更新するHourを配列にしておく
    const limitHourArr = [6, 12, 18, 23]
    // 現在の日時を取得
    // const tmp = new Date(2023, 8, 26, 23, 0)
    const tmp = new Date()
    // 取得した日時を配列にする[年, 月, 日, 時, 分, (場合によっては秒)]
    const tmpLimitDateTime = createDatetimeArray(tmp)
    // 配列の4つ目(インデックスは3)のhourより大きい値を取得(大きい中でも最小のものを一つ)
    const limitH = limitHourArr.find(e => e > tmpLimitDateTime[3])
    if (limitH) {
      tmpLimitDateTime[3] = limitH
      tmpLimitDateTime[4] = 0
    } else {
      // もし23なら配列の分と秒に59を代入
      tmpLimitDateTime[3] = limitHourArr[3]
      tmpLimitDateTime[4] = 59
      tmpLimitDateTime[5] = 59
    }
    return createUnixTime(tmpLimitDateTime)
}

export default validTimeCreate