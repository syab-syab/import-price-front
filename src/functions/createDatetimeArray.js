// 渡された new Date() を元にして年月日時分の配列を返す

const createDatetimeArray = (datetime) => {
  return [datetime.getFullYear(), datetime.getMonth() + 1, datetime.getDate(), datetime.getHours(), datetime.getMinutes()]
}

export default createDatetimeArray