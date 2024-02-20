import { useEffect, useState } from 'react';

export const useHeader = () => {
  const [header2, setHeader2] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setHeader2(window.pageYOffset > 10)
      );
    }
  }, []);

  return header2;
};

export const usePopup = () => {
  const [popup, setPopup] = useState({
    type1: false,

    type2: false,
  });

  const handlePopup = () => {
    setPopup({ ...popup, type1: true });
  };

  const handlePopup2 = () => {
    setPopup({ ...popup, type2: true });
  };

  return { handlePopup, handlePopup2, popup, setPopup };
};
