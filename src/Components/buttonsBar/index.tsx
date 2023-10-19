import useIbgeData from '../../context/useIbgeData';

function ButtonsBar() {
  const { setFilterType, setFilterFavorites } = useIbgeData();
  return (
    <div>
      <button
        onClick={ () => setFilterType(null) }
      >
        Mais Recente
      </button>
      <button
        onClick={ () => { setFilterType('Release'); setFilterFavorites(null); } }
      >
        Release
      </button>
      <button
        onClick={ () => { setFilterType('Notícia'); setFilterFavorites(null); } }
      >
        Notícia
      </button>
      <button
        onClick={ () => { setFilterType(null); setFilterFavorites(true); } }
      >
        Favoritos
      </button>
    </div>
  );
}
export default ButtonsBar;
