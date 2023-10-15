import { useEffect, useState } from 'react';
import { News } from '../type';
import { fetchFeed } from '../service/FetchApi';
import IbgeContext from './IbgeContext';

type IbgeProviderProps = {
  children: React.ReactNode;
};

function IbgeProvider({ children }: IbgeProviderProps) {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFeed();
      setNews(data.items);
      console.log(data);
    };
    getData();
  }, []);
  const values = {
    news,
  };
  return (
    <IbgeContext.Provider value={ values }>
      {children}
    </IbgeContext.Provider>
  );
}

export default IbgeProvider;
