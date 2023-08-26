// 渡された配列[年, 月, 日, 時, 分]からunix時間を返す
const createUnixTime = (arr) => {
  if (arr.length === 5) {
    const tmp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4])
    return tmp.getTime()
  } else if (arr.length === 6) {
    // もし渡された配列が秒まであった場合
    const tmp = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5])
    return tmp.getTime()
  }

}

export default createUnixTime