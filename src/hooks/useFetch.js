import { useState, useEffect } from 'react';

// 引数keyに格納されたキーを使ってLocalStrageへ格納
// 引数をもう2つ増やす
const useFetch = (url, rateCheck) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  console.log(url)


  useEffect(() => {
    // 条件分岐
    // ローカルストレージに指定されたキーの値があるかどうか
    const localRates = localStorage.getItem(rateCheck) // レートの値
    // 有効期限
    // 有効期限を超過していないかどうか

    if (localRates) {
      // trueの場合
      // ローカルストレージにあるデータは文字列化しているから
      // JSON.parseで配列(オブジェクトに戻す)
      setData(JSON.parse(localRates))
      setIsLoaded(false)
      setError(null)
      console.log("通信せず")
    } else {
      // nullの場合
      const abortCont = new AbortController();

      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
          .then(res => {
            if (!res.ok) {
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
          })
          .then(data => {
            setIsLoaded(false);
            setData(data);
            // ここに格納の処理
            // ローカルストレージに格納する場合は
            // 文字列に直さないとおかしくなる(取り出した時に戻せばいい)
            localStorage.setItem(rateCheck, JSON.stringify(data))
            setError(null)
          })
          .catch(err => {
            if (err.name === 'AbortError') {
              console.log('fetch aborted')
            } else {
              setIsLoaded(false);
              setError(err.message);
            }
          })
        }, 1000);
      console.log("通信完了")
      return () => abortCont.abort();
    }
  }, [url, rateCheck])

  return { data, isLoaded, error };
}
 
export default useFetch;