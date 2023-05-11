import { useState, useEffect } from 'react';

function usePromise(promiseCreator, deps) {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await promiseCreator();
        setResponse(result.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, response, error];
}

export default usePromise;
