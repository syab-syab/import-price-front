import { useState, useEffect } from 'react';

// 引数keyに格納されたキーを使ってLocalStrageへ格納
const useFetch = (url, key) => {
  const [data, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    // 条件分岐
    // ローカルストレージに指定されたキーの値があるかどうか
    const localData = localStorage.getItem(key)

    if (localData) {
      // trueの場合
      // ローカルストレージにあるデータは文字列化しているから
      // JSON.parseで配列(オブジェクトに戻す)
      setItems(JSON.parse(localData))
      setIsLoaded(false)
      setError(null)
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
            setItems(data);
            // ここに格納の処理
            // ローカルストレージに格納する場合は
            // 文字列に直さないとおかしくなる(取り出した時に戻せばいい)
            localStorage.setItem(key, JSON.stringify(data))
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

      return () => abortCont.abort();
    }
  }, [url, key])

  return { data, isLoaded, error };
}
 
export default useFetch;