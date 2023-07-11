import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center bg-gray-900 p-5 text-gray-400 mb-10 justify-between">
            <h1 className="text-xl font-bold">Dynamic Component</h1>
            <ul className="flex">
                <li className="mx-4 font-semibold"><Link to='/'>Home</Link></li>
                <li className="mx-4 font-semibold"><Link to='/button'>Button</Link></li>
                <li className="mx-4 font-semibold"><Link to='/table'>Table</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;