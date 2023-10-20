import { useContext } from 'react';
import Header from './Components/header';
import Feed from './Components/feed';
import LatestNewsCard from './Components/latestNewsCard';
import IbgeContext from './context/IbgeContext';
import SearchBar from './Components/SearchBar';

function App() {
  const ibgeContext = useContext(IbgeContext);
  return (
    <div>
      <Header />
      { ibgeContext.news[0] && <LatestNewsCard newArticle={ ibgeContext.news[0] } /> }
      <SearchBar />
      <Feed />
    </div>
  );
}
export default App;
