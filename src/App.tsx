import { useContext } from 'react';
import Header from './Components/header';
import Feed from './Components/feed';
import LatestNewsCard from './Components/latestNewsCard';
import IbgeContext from './context/IbgeContext';
import SearchBar from './Components/SearchBar';

function App() {
  const ibgeContext = useContext(IbgeContext);
  return (
    <main>
      <Header />
      <section aria-label="Latest News">
        { ibgeContext.news[0] && <LatestNewsCard newArticle={ ibgeContext.news[0] } /> }
      </section>
      <aside>
        <SearchBar />
      </aside>
      <section aria-label="Feed">
        <Feed />
      </section>
    </main>
  );
}

export default App;
