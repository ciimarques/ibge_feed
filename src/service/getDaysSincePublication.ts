import { DateTime } from 'luxon';

const getDaysSincePublication = (publicationDate: string) => {
  const currentDate = DateTime.local();
  const pubDate = DateTime.fromFormat(publicationDate, 'dd/MM/yyyy HH:mm:ss');

  if (!pubDate.isValid) {
    return 'Data inválida';
  }

  const diff = currentDate.diff(pubDate, ['days', 'hours']);
  const days = Math.floor(diff.days);
  const hours = Math.floor(diff.hours % 24);

  if (days > 0) {
    return `${days} dias atrás`;
  }
  return `${hours} horas atrás`;
};

export default getDaysSincePublication;
