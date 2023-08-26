// 渡された new Date() を元にして[年, 月, 日, 時, 分]の配列を返す

const createDatetimeArray = (datetime) => {
  return [datetime.getFullYear(), datetime.getMonth() + 1, datetime.getDate(), datetime.getHours(), datetime.getMinutes()]
}

export default createDatetimeArray