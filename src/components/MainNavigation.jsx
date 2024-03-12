import marbleTexture from '../assets/augustine-wong-li0iC0rjvvg-unsplash.jpg'
import { Link } from 'react-router-dom';

function MainNavigation() {
    return (
        <nav className=''>
            <ul>
                <li className='font-bold'>
                    <Link to="/projects">Projects</Link>
                </li>
                <li className='font'>
                    <Link to="/music">Music</Link>
                </li>
                {/* <li className='font-bold'>
                    <Link to="/blog">Blog</Link>
                </li> */}
                <li className='font-bold'>
                    <Link to="/about">About</Link>
                </li>
                <li className='font-bold'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;
