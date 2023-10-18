import { useContext } from "react";
import useIbgeData from "../../context/UseIbgeData";
import { News } from "../../type";
import CardNews from "../CardNews";
import IbgeContext from "../../context/IbgeContext";


function Feed() {
  const ibgeContext = useContext(IbgeContext);
  const { favorites } = useIbgeData();

  const isFavorite = (newsArticle: News) => favorites.some((fav:News) => fav.id === newsArticle.id);
    

  return (
    <div>
      {ibgeContext.news.slice(1).map((newsArticle: News) => (
        <CardNews key={newsArticle.id} newsArticle={ newsArticle } isFavorite={ isFavorite(newsArticle)} />
      ))}
    </div>
  );
}

export default Feed;
