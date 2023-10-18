import useIbgeData from '../../context/useIbgeData';

function TitleFilter() {
  const { filterTitle, setFilterTitle } = useIbgeData();

  return (
    <input
      type="text"
      placeholder="Filtrar por título..."
      value={ filterTitle }
      onChange={ (event) => setFilterTitle(event.target.value) }
    />
  );
}

export default TitleFilter;
