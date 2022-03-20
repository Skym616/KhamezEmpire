import { createContext, useContext, useEffect, useState } from 'react';

const BadgeContext = createContext({
  value: 0, update: () => {
  }
});

const BadgeProvider = ({ children }) => {
  const [length, setLength] = useState(0);
  const update = () => {
    checkLength();
  };

  useEffect(() => {
    checkLength();
  }, []);

  const checkLength = () => {
    const tab = JSON.parse(window.sessionStorage.getItem('pannier'));
    if (tab) {
      setLength(tab.length);
    }
  };

  const value = { value: length, update: update };
  return <BadgeContext.Provider value={value}>{children}</BadgeContext.Provider>
    ;
};

const useBadgeContext = () => {
  const { value, update } = useContext(BadgeContext);
  return { value, update };
};

export { useBadgeContext, BadgeProvider };