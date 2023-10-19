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
    <section>
      <img src={ fullImagePath } alt="imagem-noticia-recente" />
      <h2>{ newArticle.titulo }</h2>
      <p>{ newArticle.introducao }</p>
      <p>
        { getDaysSincePublication(newArticle.data_publicacao) }
        { ' dias atrás' }
      </p>
      <a href={ newArticle.link } target="_blank" rel="noopener noreferrer">Leia Mais</a>
    </section>
  );
}

export default LatestNewsCard;
