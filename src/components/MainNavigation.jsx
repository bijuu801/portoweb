import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <nav className="flex flex-col items-center justify-center w-32 h-screen bg-gray-100 fixed top-0 left-0 border-r-2 border-gray-400">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/music">Music</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
