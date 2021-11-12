import Link from 'next/link';
import style from '../styles/NavBar.module.css';

const NavBar = () => (
    <nav className={style.navbar}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
            <a class="navbar-brand" href="/pages/index">VOS</a>
                <ul class="nav justify-content-end">
                <li class="nav-item">
                    <li>
                        <Link href='/'>
                            <a>Beranda</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/airterjun'>
                            <a>airterjun</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/pantai'>
                            <a>pantai</a>
                        </Link>
                    </li>
                    </li>
                </ul>
            </div>
         </nav>    
    </nav>
);

export default NavBar;