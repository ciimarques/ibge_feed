import { createContext } from 'react';
import { News } from '../type';

type IbgeNoticiaContextType = {
  news: News[];
};
const IbgeContext = createContext({} as IbgeNoticiaContextType);

export default IbgeContext;
