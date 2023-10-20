import useIbgeData from '../../context/useIbgeData';

function TitleFilter() {
  const { filterTitle, setFilterTitle } = useIbgeData();

  return (
    <input
      className="shadow bg-gray-300 rounded w-1/2 p-2 hover:bg-indigo-500
        hover: transition duration-300"
      type="text"
      placeholder="Filtre por Titulo"
      value={ filterTitle }
      onChange={ (event) => setFilterTitle(event.target.value) }
    />
  );
}

export default TitleFilter;
