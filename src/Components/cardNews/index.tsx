import getDaysSincePublication from '../../service/getDaysSincePublication';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import useIbgeData from '../../context/useIbgeData';
import { News } from '../../types';

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
    <article className="p-5 rounded-2xl shadow-lg bg-gray-200">
      <h2 className="font-bold text-1xl mb-2 text-center">{ newsArticle.titulo }</h2>
      <p
        className="text-gray-800 mb-2 leading-relaxed text-justify"
      >
        { newsArticle.introducao }
      </p>
      <p className="w-full text-sm">
        { getDaysSincePublication(newsArticle.data_publicacao) }
      </p>
      <a
        className="text-indigo-500 px-4 py-3 bg-gray-300 rounded
        hover:bg-indigo-500 hover:text-white transition duration-300"
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
    </article>
  );
}

export default CardNews;
