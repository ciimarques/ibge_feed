import getDaysSincePublication from '../../service/getDaysSincePublication';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import useIbgeData from '../../context/useIbgeData';
import { News } from '../../type';

type CardNewsProps = {
  newsArticle: News,
  isFavorite: boolean,
};

function CardNews(Props: CardNewsProps) {
  const { newsArticle, isFavorite } = Props;
  const { favorites, setFavorites } = useIbgeData();
  const heartIcon = favorites?.some((fav) => fav.id === newsArticle.id)
    ? blackHeartIcon
    : whiteHeartIcon;
  const altText = favorites ? 'Black Heart Icon' : 'White Heart Icon';
  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.id !== newsArticle.id));
    } else {
      setFavorites([...favorites, newsArticle]);
    }
  };
  return (
    <div>
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
        src={ heartIcon }
        type="image"
        onClick={ toggleFavorite }
        alt={ altText }
      />
    </div>
  );
}

export default CardNews;
