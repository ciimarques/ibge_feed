import { createContext } from 'react';
import { News } from '../types';

type IbgeNoticiaContextType = {
  news: News[];
  favorites: News[];
  setFavorites: React.Dispatch<React.SetStateAction<News[]>>;
  filterTitle: string;
  setFilterTitle: React.Dispatch<React.SetStateAction<string>>;
  filterType: null | string;
  setFilterType: React.Dispatch<React.SetStateAction<null | string>>;
  filterFavorites: null | boolean;
  setFilterFavorites: (fav: null | boolean) => void;
};
const IbgeContext = createContext({} as IbgeNoticiaContextType);

export default IbgeContext;
