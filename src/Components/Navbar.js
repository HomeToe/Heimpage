import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
     <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className="navbar-logo"onClick={closeMobileMenu}>
               HeimPage 
               <i class="fa-solid fa-fire navbar-icon"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='https://f1tv.formula1.com/' className='nav-links' onClick={closeMobileMenu}>
                        F1 TV
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='https://fantasy.formula1.com/en/' className='nav-links' onClick={closeMobileMenu}>
                        F1 Fantasy
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='https://www.nflgamepass.com/en' className='nav-links' onClick={closeMobileMenu}>
                        NFL Gamepass
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='https://fantasy.nfl.com/' className='nav-links' onClick={closeMobileMenu}>
                        NFL Fantasy
                    </Link>
                </li>
            </ul>
        </div>
     </nav>
    </>
  );
}

export default Navbar;
