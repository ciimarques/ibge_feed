import { useContext } from 'react';
import IbgeContext from '../../context/IbgeContext';
import getDaysSincePublication from '../../service/getDaysSincePublication';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import useIbgeData from '../../context/UseIbgeData';
import { News } from '../../type';

type CardNewsProps = {
  newsArticle: News,
  isFavorite: boolean,
}

function CardNews(Props: CardNewsProps) {
  const { newsArticle, isFavorite} = Props

  const ibgeContext = useContext(IbgeContext);
  const { favorites, setFavorites } = useIbgeData();
  
  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== newsArticle.id));
    } else {
      setFavorites([...favorites, newsArticle]);
    }
  };

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
          <input
            src={ favorites.some((fav) => fav.id === newsArticle.id) ? blackHeartIcon : whiteHeartIcon }
            type="image"
            onClick={toggleFavorite}
            alt={ favorites ? 'Black Heart Icon' : 'White Heart Icon' }
          />
        </div>
      ))}
    </div>
  );
}

export default CardNews;