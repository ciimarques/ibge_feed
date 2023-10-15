import { createContext } from 'react';
import { Noticia } from '../type';

type IbgeNoticiaContextType = {
  noticias: Noticia[];
};
const IbgeContext = createContext({} as IbgeNoticiaContextType);

export default IbgeContext;
