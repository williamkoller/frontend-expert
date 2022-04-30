import Image from 'next/image';
import Link from 'next/link';
import Styles from './header.module.css';

export function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}></div>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/favorites'>
              <a>Favorites</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
