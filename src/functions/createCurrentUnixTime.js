// アクセス時のunix時間を取得する
import createDatetimeArray from "./createDatetimeArray"
import createUnixTime from "./createUnixTime"

const createCurrentUnixTime = () => {
  const tmp = new Date()
  const tmpCurrentDateTime = createDatetimeArray(tmp)
  
  return createUnixTime(tmpCurrentDateTime)
}

export default createCurrentUnixTime