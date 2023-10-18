import useIbgeData from '../../context/useIbgeData';
import { News } from '../../type';
import CardNews from '../CardNews';

function Feed() {
  const { news, favorites } = useIbgeData();
  const isFavorite = (newsArticle: News) => favorites
    .some((fav:News) => fav.id === newsArticle.id);

  return (
    <div>
      { news.slice(1).map((newsArticle: News) => (
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
