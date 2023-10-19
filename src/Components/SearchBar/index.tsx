import ButtonsBar from '../buttonsBar';
import TitleFilter from '../titleFilter/index';

function SearchBar() {
  return (
    <div className="search-bar">
      <TitleFilter />
      <ButtonsBar />
    </div>
  );
}

export default SearchBar;
