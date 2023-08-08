// keyはMain.jsのrateKey
// dataはMain.jsのlocalRateDataCheck

const localStorageManage = (key, data) => {
  // レートのデータの期限の処理
  let ymdArray = JSON.parse(data)[0].updated.split('-')

  // new Dateで任意の日付を取得するには、月だけ-1の数値にする
  // apiの更新時間(予定では毎朝6時にするから余裕をもって一時間後の7時にする)
  let tmpDate = new Date(Number(ymdArray[0]), Number(ymdArray[1])-1, Number(ymdArray[2])+1)
  let limitDate = tmpDate.getTime() + 25200000
  console.log(new Date(limitDate).toLocaleDateString({ timeZone: 'Asia/Tokyo' }))

  // 一日 = 86400000ミリ秒
  // 一時間 = 3600000ミリ秒
  // 七時間 = 25200000ミリ秒
}

export default localStorageManage