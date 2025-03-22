import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/" className={router.pathname === '/' ? classes.active : ''}>
              All Meetups
            </Link>
          </li>
          <li>
            <Link href="/new-meetup" className={router.pathname === '/new-meetup' ? classes.active : ''}>
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
