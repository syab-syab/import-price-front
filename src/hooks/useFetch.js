import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
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
    
  }, [url])
  console.log("yes")
  return { data, isLoaded, error };
}
 
export default useFetch;