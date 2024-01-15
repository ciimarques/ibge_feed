import React, { useState } from 'react';
import useIbgeData from '../../context/useIbgeData';
import { News } from '../../types';
import CardNews from '../cardNews';

function Feed() {
  const { news, favorites, filterTitle, filterType, filterFavorites } = useIbgeData();
  const isFavorite = (newsArticle: News) => favorites
    .some((fav: News) => fav.id === newsArticle.id);

  const [visibleNewsCount, setVisibleNewsCount] = useState(12);

  const filteredNews = news.filter((article) => {
    const titleMatch = article.titulo.toLowerCase().includes(filterTitle.toLowerCase());
    const typeMatch = filterType ? article.tipo === filterType : true;
    const isFavoriteMatch = filterFavorites ? isFavorite(article) : true;
    return titleMatch && typeMatch && isFavoriteMatch;
  });

  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 12);
  };

  return (
    <>
      <main className="grid p-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNews.slice(0, visibleNewsCount).map((newsArticle: News) => (
          <CardNews
            key={ newsArticle.id }
            newsArticle={ newsArticle }
            isFavorite={ isFavorite(newsArticle) }
          />
        ))}
      </main>
      {visibleNewsCount < filteredNews.length && (
        <button
          className="relative w-full text-indigo-500 px-4 py-3 bg-gray-300 rounded
          hover:bg-indigo-500 hover:text-white transition duration-300"
          onClick={ loadMoreNews }
        >
          Mais Notícias
        </button>
      )}
    </>
  );
}

export default Feed;
