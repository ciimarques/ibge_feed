import React from 'react';
import { render, screen } from '@testing-library/react';
import LatestNewsCard from '../Components/latestNewsCard/index';

describe('LatestNewsCard component', () => {
  const fakeArticle = {
    id: 1,
    titulo: 'Título de Teste',
    introducao: 'Introdução de Teste',
    data_publicacao: '01/01/2024',
    link: 'http://example.com/test',
    imagens: JSON.stringify({ image_intro: '/path/to/image.jpg' }),
  };

  beforeEach(() => {
    render(<LatestNewsCard newArticle={ fakeArticle } />);
  });

  test('renders image correctly', () => {
    const image = screen.getByRole('img', { name: /imagem-noticia-recente/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://agenciadenoticias.ibge.gov.br//path/to/image.jpg');
  });

  test('renders title correctly', () => {
    const title = screen.getByRole('heading', { name: /Título de Teste/i });
    expect(title).toBeInTheDocument();
  });

  test('renders introduction correctly', () => {
    const intro = screen.getByText(/Introdução de Teste/i);
    expect(intro).toBeInTheDocument();
  });

  test('renders read more link correctly', () => {
    const link = screen.getByRole('link', { name: /Leia Mais/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'http://example.com/test');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
