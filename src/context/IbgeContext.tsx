import { createContext } from 'react';
import { News } from '../type';

type IbgeNoticiaContextType = {
  news: News[];
  favorites: News[];
  setFavorites: React.Dispatch<React.SetStateAction<News[]>>;
  filterTitle: string;
  setFilterTitle: React.Dispatch<React.SetStateAction<string>>;
};
const IbgeContext = createContext({} as IbgeNoticiaContextType);

export default IbgeContext;
