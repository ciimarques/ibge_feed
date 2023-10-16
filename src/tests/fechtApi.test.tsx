import { vi } from 'vitest';
import { fetchFeed } from '../service/FetchApi';

global.fetch = vi.fn(() => (
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, titulo: 'Notícia 1' }]),
  })
)) as any;

describe('fetchFeed', () => {
  test('should fetch feed data successfully', async () => {
    const result = await fetchFeed();
    expect(result).toEqual([{ id: 1, titulo: 'Notícia 1' }]);
  });
});
