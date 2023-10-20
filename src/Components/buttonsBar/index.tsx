import useIbgeData from '../../context/useIbgeData';

function ButtonsBar() {
  const { setFilterType, setFilterFavorites } = useIbgeData();
  return (
    <div>
      <button
        className="font-bold px-4 py-3
        hover:text-indigo-500 hover: transition duration-300"
        onClick={ () => setFilterType(null) }
      >
        Mais Recente
      </button>
      <button
        className="font-bold px-4 py-3
        hover:text-indigo-500 hover: transition duration-300"
        onClick={ () => { setFilterType('Release'); setFilterFavorites(null); } }
      >
        Release
      </button>
      <button
        className="font-bold px-4 py-3
        hover:text-indigo-500 hover: transition duration-300"
        onClick={ () => { setFilterType('Notícia'); setFilterFavorites(null); } }
      >
        Notícia
      </button>
      <button
        className="font-bold px-4 py-3
        hover:text-indigo-500 hover: transition duration-300"
        onClick={ () => { setFilterType(null); setFilterFavorites(true); } }
      >
        Favoritos
      </button>
    </div>
  );
}
export default ButtonsBar;
