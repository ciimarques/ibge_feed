const getDaysSincePublication = (publicationDate: string) => {
  const currentDate = new Date();
  const pubDate = new Date(publicationDate);

  const diffInTime = currentDate.getTime() - pubDate.getTime();
  const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

  return diffInDays;
};

export default getDaysSincePublication;
