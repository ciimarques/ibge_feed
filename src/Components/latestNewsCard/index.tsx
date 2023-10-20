import { News } from '../../types';
import getDaysSincePublication from '../../service/getDaysSincePublication';

type LatesNewsProp = {
  newArticle: News,
};

function LatestNewsCard(prop: LatesNewsProp) {
  const { newArticle } = prop;
  const imagesObject = JSON.parse(newArticle.imagens);
  const imageIntroPath = imagesObject.image_intro;
  const fullImagePath = `https://agenciadenoticias.ibge.gov.br/${imageIntroPath}`;

  return (
    <section className="bg-white p-10 rounded-2xl shadow-lg">
      <img src={ fullImagePath } alt="imagem-noticia-recente" />
      <div>
        <p>Notícia mais recente</p>
        <h2 className="text-6lg mb-10">{ newArticle.titulo }</h2>
        <p>{ newArticle.introducao }</p>
        <p>
          { getDaysSincePublication(newArticle.data_publicacao) }
        </p>
        <a
          href={ newArticle.link }
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia Mais
        </a>
      </div>
    </section>
  );
}

export default LatestNewsCard;
