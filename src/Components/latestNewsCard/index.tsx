import { News } from '../../types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import getDaysSincePublication from '../../service/getDaysSincePublication';
import useIbgeData from '../../context/useIbgeData';

type LatesNewsProp = {
  newArticle: News,
};

function LatestNewsCard(prop: LatesNewsProp) {
  const { newArticle } = prop;
  const { favorites, setFavorites } = useIbgeData();
  const imagesObject = JSON.parse(newArticle.imagens);
  const imageIntroPath = imagesObject.image_intro;
  const fullImagePath = `https://agenciadenoticias.ibge.gov.br/${imageIntroPath}`;
  const heartIcon = favorites?.some((fav) => fav.id === newArticle.id)
    ? blackHeartIcon
    : whiteHeartIcon;
  const altText = favorites ? 'Black Heart Icon' : 'White Heart Icon';
  const isFav = () => favorites
    .some((fav:News) => fav.id === newArticle.id);
  const toggleFavorite = () => {
    if (isFav()) {
      setFavorites(favorites.filter((fav) => fav.id !== newArticle.id));
    } else {
      setFavorites([...favorites, newArticle]);
    }
  };

  return (
    <section
      className="grid p-3 sm:grid-cols-1 lg:grid-cols-2
                gap-4 rounded-2xl shadow-lg bg-gray-200"
    >
      <img
        className="w-auto"
        src={ fullImagePath }
        alt="imagem-noticia-recente"
      />
      <div className="p-5 flex flex-row flex-wrap justify-around">
        <div className="text-left w-full">
          <p
            className=" text-sm text-red-700 font-bold mb-2"
          >
            Notícia mais recente
          </p>
        </div>
        <h2
          className="font-bold text-1xl mb-2 text-center"
        >
          { newArticle.titulo }
        </h2>
        <p
          className="text-gray-800 mb-2 leading-relaxed text-justify"
        >
          { newArticle.introducao }
        </p>
        <p
          className="w-full text-sm"
        >
          { getDaysSincePublication(newArticle.data_publicacao) }
        </p>
        <a
          className="text-indigo-500 px-4 py-3 bg-gray-300 rounded
          hover:bg-indigo-500 hover:text-white transition duration-300"
          href={ newArticle.link }
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
    </section>
  );
}

export default LatestNewsCard;
