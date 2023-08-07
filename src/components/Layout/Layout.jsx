import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
const Layout = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={css.navLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navLink}>
          Movies
        </NavLink>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
