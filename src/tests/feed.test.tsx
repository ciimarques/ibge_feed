import { render, screen } from '@testing-library/react';
import IbgeContext from '../context/IbgeContext';
import Feed from '../Components/feed/index';

describe('Testa o componente Feed ', () => {
  test('Renderiza corretamente as notícias', () => {
    const fakeNews = [
      {
        id: 1,
        titulo: 'Notícia 1',
        introducao: 'Introdução 1',
        data_publicacao: '01/01/2023',
        link: 'http://example.com/1',
      },
      {
        id: 2,
        titulo: 'Notícia 2',
        introducao: 'Introdução 2',
        data_publicacao: '02/02/2023',
        link: 'http://example.com/2',
      },
    ];
    render(
      <IbgeContext.Provider value={ { noticias: fakeNews } }>
        <Feed />
      </IbgeContext.Provider>,
    );
    expect(screen.getByText('Notícia 1')).toBeInTheDocument();
    expect(screen.getByText('Introdução 1')).toBeInTheDocument();
    expect(screen.getByText('01/01/2023')).toBeInTheDocument();
    expect(screen.getByText('Notícia 2')).toBeInTheDocument();
    expect(screen.getByText('Introdução 2')).toBeInTheDocument();
    expect(screen.getByText('02/02/2023')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'http://example.com/1');
    expect(links[1]).toHaveAttribute('href', 'http://example.com/2');
  });
});
