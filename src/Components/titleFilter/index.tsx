import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import useIbgeData from '../../context/useIbgeData';

function TitleFilter() {
  const { filterTitle, setFilterTitle } = useIbgeData();

  return (
    <div className="relative w-full">
      <input
        className="shadow-md bg-gray-100 rounded-full w-full pl-10 pr-3 py-2 border
          border-gray-300 focus:outline-none focus:ring-2
           focus:ring-indigo-500 focus:border-indigo-500
           hover:border-indigo-500 text-gray-700 placeholder-gray-500"
        type="text"
        placeholder="Filtre por Titulo"
        value={ filterTitle }
        onChange={ (event) => setFilterTitle(event.target.value) }
      />
      <div
        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  );
}

export default TitleFilter;
