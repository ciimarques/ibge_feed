import { useEffect, useState } from 'react';
import { News } from '../types';
import { fetchFeed } from '../service/FetchApi';
import IbgeContext from './IbgeContext';

type IbgeProviderProps = {
  children: React.ReactNode;
};

function IbgeProvider({ children }: IbgeProviderProps) {
  const [news, setNews] = useState<News[]>([]);
  const [favorites, setFavorites] = useState<News[]>(
    JSON.parse(localStorage.getItem('favorites') || '[]'),
  );
  const [filterTitle, setFilterTitle] = useState('');
  const [filterType, setFilterType] = useState<null | string>(null);
  const [filterFavorites, setFilterFavorites] = useState<null | boolean >(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchFeed();
      setNews(data.items);
      console.log(data);
    };
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  const values = {
    news,
    favorites,
    setFavorites,
    filterTitle,
    setFilterTitle,
    filterType,
    setFilterType,
    filterFavorites,
    setFilterFavorites,
  };
  return (
    <IbgeContext.Provider value={ values }>
      {children}
    </IbgeContext.Provider>
  );
}

export default IbgeProvider;
