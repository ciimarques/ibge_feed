import { useContext } from 'react';
import IbgeContext from '../../context/IbgeContext';

function Feed() {
  const ibgeContext = useContext(IbgeContext);

  return (
    <div>
      {ibgeContext.noticias.map((noticia) => (
        <div key={ noticia.id }>
          <h2>{ noticia.titulo }</h2>
          <p>{ noticia.introducao }</p>
          <p>{ noticia.data_publicacao }</p>
          <a href={ noticia.link } target="_blank" rel="noopener noreferrer">Leia Mais</a>
        </div>
      ))}
    </div>
  );
}

export default Feed;
