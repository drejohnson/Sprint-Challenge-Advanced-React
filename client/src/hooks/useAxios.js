import { useEffect } from 'react';
import axios from 'axios';
import useValue from './useValue';

const useAxios = (url, initialState = null) => {
  const { fetching, error, setError, setValue, value } = useValue(initialState);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(url);
        setValue(result.data);
      } catch (err) {
        console.log(err);
        setError(err);
      }
    })();
  }, []);

  return [value, fetching, error];
};

export default useAxios;
