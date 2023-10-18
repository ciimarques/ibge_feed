import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import IbgeContext from '../context/IbgeContext';
import Feed from '../Components/feed';

vi.mock('../../service/getDaysSincePublication', () => {
  return vi.fn(() => 5);
});
describe('Feed component', () => {
  test('renders news correctly', async () => {
    const fakeNews = [
      {
        id: 1,
        titulo: 'Notícia 1',
        introducao: 'Introdução 1',
        data_publicacao: '01/01/2023',
        link: 'http://example.com/1',
        imagens: '',
      },
      {
        id: 2,
        titulo: 'Notícia 2',
        introducao: 'Introdução 2',
        data_publicacao: '02/02/2023',
        link: 'http://example.com/2',
        imagens: '',
      },
    ];
    const fakeFavorites = [
      {
        id: 3,
        titulo: 'Notícia Favorita',
        introducao: 'Introdução Favorita',
        data_publicacao: '03/03/2023',
        link: 'http://example.com/3',
        imagens: '',
      },
    ];
    const fakeTitle = '';
    const setFakeFavorites = vi.fn();
    const setFakeTitle = vi.fn();
    const values = {
      news: fakeNews,
      favorites: fakeFavorites,
      setFavorites: setFakeFavorites,
      filterTitle: fakeTitle,
      setFilterTitle: setFakeTitle,
    };
    render(
      <IbgeContext.Provider value={ values }>
        <Feed />
      </IbgeContext.Provider>,
    );
    expect(screen.getByText('Notícia 2')).toBeInTheDocument();
    expect(screen.getByText('Introdução 2')).toBeInTheDocument();
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'http://example.com/2');
  });
});
