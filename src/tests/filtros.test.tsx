type Article = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
  imagens: string;
  isFavorite?: boolean;
};

describe('Filtered News Function', () => {
  const isFavorite = (article: Article) => article.isFavorite;
  const fakeNews = [
    {
      id: 1,
      tipo: 'release',
      titulo: 'Notícia 1',
      introducao: 'Introdução 1',
      data_publicacao: '01/01/2023',
      link: 'http://example.com/1',
      imagens: '',
    },
    {
      id: 2,
      tipo: 'noticia',
      titulo: 'Notícia 2',
      introducao: 'Introdução 2',
      data_publicacao: '02/02/2023',
      link: 'http://example.com/2',
      imagens: '',
    },
  ];
  test('filtra por título', () => {
    const filterTitle = 'notícia 2';
    const result = fakeNews.filter((article: Article) => {
      const titleMatch = article.titulo.toLowerCase().includes(filterTitle.toLowerCase());
      return titleMatch;
    });
    expect(result).toEqual([fakeNews[1]]);
  });

  test('filtra por tipo', () => {
    const filterType = 'release';
    const result = fakeNews.filter((article: Article) => {
      const typeMatch = filterType ? article.tipo === filterType : true;
      return typeMatch;
    });
    expect(result).toEqual([fakeNews[0]]);
  });

  test('filtra por favoritos', () => {
    const filterFavorites = false;
    const result = fakeNews.filter((article: Article) => {
      const isFavoriteMatch = filterFavorites ? isFavorite(article) : true;
      return isFavoriteMatch;
    });
    expect(result).toEqual(fakeNews);
  });
});
