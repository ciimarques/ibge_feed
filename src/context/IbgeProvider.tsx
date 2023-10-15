import { useEffect, useState } from 'react';
import { Noticia } from '../type';
import { fetchFeed } from '../service/FetchApi';
import IbgeContext from './IbgeContext';

type IbgeProviderProps = {
  children: React.ReactNode;
};

function IbgeProvider({ children }: IbgeProviderProps) {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFeed();
      setNoticias(data);
      console.log(data);
    };
    getData();
  }, []);
  const values = {
    noticias,
  };
  return (
    <IbgeContext.Provider value={ values }>
      {children}
    </IbgeContext.Provider>
  );
}

export default IbgeProvider;
