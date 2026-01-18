import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/navbar';

function Layout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </div>
  );
}

export default Layout;