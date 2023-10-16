import { useContext } from 'react';
import IbgeContext from '../../context/IbgeContext';
import getDaysSincePublication from '../../service/getDaysSincePublication';

function Feed() {
  const ibgeContext = useContext(IbgeContext);
  return (
    <div>
      {ibgeContext.news.slice(1).map((newsArticle) => (
        <div key={ newsArticle.id }>
          <h2>{ newsArticle.titulo }</h2>
          <p>{ newsArticle.introducao }</p>
          <p>
            { 'Publicado há ' }
            { getDaysSincePublication(newsArticle.data_publicacao) }
            { ' dias' }
          </p>
          <a
            href={ newsArticle.link }
            target="_blank"
            rel="noopener noreferrer"
          >
            Leia Mais
          </a>
        </div>
      ))}
    </div>
  );
}

export default Feed;
