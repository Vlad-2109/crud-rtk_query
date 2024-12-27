import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="min h-16 bg-black flex justify-start items-center gap-6 px-5">
      <div>
        <p className="text-white text-xl font-bold">CRUD</p>
      </div>
      <div>
        <Link className="text-gray-500 text-lg font-semibold hover:text-white" to="/create">
          Create
        </Link>
      </div>
      <div>
        <Link className="text-gray-500 text-lg font-semibold hover:text-white" to="/">
          Read
        </Link>
      </div>
    </div>
  );
};

export default Header;
