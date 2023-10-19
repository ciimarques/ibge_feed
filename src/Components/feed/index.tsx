import useIbgeData from '../../context/useIbgeData';
import { News } from '../../types';
import CardNews from '../cardNews';

function Feed() {
  const { news, favorites, filterTitle, filterType, filterFavorites } = useIbgeData();
  const isFavorite = (newsArticle: News) => favorites
    .some((fav:News) => fav.id === newsArticle.id);

  const filteredNews = news.filter((article) => {
    const titleMatch = article.titulo.toLowerCase().includes(filterTitle.toLowerCase());
    const typeMatch = filterType ? article.tipo === filterType : true;
    const isFavoriteMatch = filterFavorites ? isFavorite(article) : true;
    return titleMatch && typeMatch && isFavoriteMatch;
  });

  return (
    <div>
      { filteredNews.slice(1).map((newsArticle: News) => (
        <CardNews
          key={ newsArticle.id }
          newsArticle={ newsArticle }
          isFavorite={ isFavorite(newsArticle) }
        />
      ))}
    </div>
  );
}

export default Feed;
