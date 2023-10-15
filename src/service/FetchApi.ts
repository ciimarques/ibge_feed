export const fetchFeed = async () => {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=15');
  const data = await response.json();
  return data;
};
