import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = initialValue => {
  const [darkmode, setDarkmode] = useLocalStorage(
    'dark',
    initialValue || false,
  );

  console.log(darkmode);
  useEffect(() => {
    const body = document.querySelector('body');
    darkmode
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  }, [darkmode]);

  return [darkmode, setDarkmode];
};

export default useDarkMode;
