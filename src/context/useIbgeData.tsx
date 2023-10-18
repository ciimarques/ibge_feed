import { useContext } from 'react';
import IbgeContext from './IbgeContext';

const useIbgeData = () => {
  const context = useContext(IbgeContext);
  if (!context) {
    throw new Error('useIbgeData deve ser usado dentro de um IbgeProvider');
  }
  return context;
};

export default useIbgeData;
