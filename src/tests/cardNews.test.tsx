import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardNews from '../Components/cardNews/index';
import { News } from '../types';

vi.mock('../context/UseIbgeData', () => ({
  useIbgeData: () => ({
    favorites: [],
    setFavorites: vi.fn(),
  }),
}));

let mockNews: News;

beforeEach(() => {
  vi.mock('../../service/getDaysSincePublication', () => () => 5);
  vi.mock('../../context/useIbgeData', () => ({
    useIbgeData: () => ({
      favorites: [],
      setFavorites: vi.fn(),
    }),
  }));

  mockNews = {
    id: 1,
    tipo: 'noticia',
    titulo: 'Test Title',
    introducao: 'Test Introduction',
    data_publicacao: '2021-01-01',
    link: 'https://example.com',
    imagens: '',
  };
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('CardNews component', () => {
  test('should display news title and introduction', () => {
    render(<CardNews newsArticle={ mockNews } isFavorite={ false } />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Introduction')).toBeInTheDocument();
  });

  test('should display correct days since publication', () => {
    render(<CardNews newsArticle={ mockNews } isFavorite={ false } />);
    expect(screen.getByText(/Publicado há \d+ dias/)).toBeInTheDocument();
  });
});
