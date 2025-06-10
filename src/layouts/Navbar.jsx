import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navebar() {
    return(
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Navebar;