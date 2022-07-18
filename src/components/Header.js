import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div class="linkContainer">
      <Link to='/' class="link">Shop</Link>
      <Link to='/cart' class="link">Cart</Link>
      <Link to='/orders' class="link">Orders</Link>
    </div>
  );
}

export default Header;