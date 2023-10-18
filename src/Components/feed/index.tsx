import useIbgeData from '../../context/useIbgeData';
import { News } from '../../type';
import CardNews from '../cardNews';

function Feed() {
  const { news, favorites, filterTitle } = useIbgeData();
  const isFavorite = (newsArticle: News) => favorites
    .some((fav:News) => fav.id === newsArticle.id);
  const filteredNews = news.filter((article) => (
    article.titulo.toLowerCase().includes(filterTitle.toLowerCase())
  ));
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
