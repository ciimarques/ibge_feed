import ButtonsBar from '../buttonsBar';
import TitleFilter from '../titleFilter/index';

function SearchBar() {
  return (
    <div
      className="grid p-3 sm:grid-cols-1 md:grid-cols-2 w-full shadow-lg
        justify-items-center"
    >
      <ButtonsBar />
      <TitleFilter />
    </div>
  );
}

export default SearchBar;
