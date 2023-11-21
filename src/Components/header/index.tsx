import jornal from '../../images/jornal.png';

function Header() {
  return (
    <div className="flex flex-row flex-nowrap items-center bg-indigo-200">
      <img
        className="sm:w-auto lg:w-20"
        src={ jornal }
        alt="desenho-de-jornal"
      />
      <h1
        className="font-bold sm:text-5xl lg:text-7xl w-full mb-2 text-center text-white"
      >
        Tribuna Online
      </h1>
    </div>
  );
}

export default Header;
