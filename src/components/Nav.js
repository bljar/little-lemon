import './Nav.css';
import Header from './Header';

function Nav() {
  return (
    <nav>
			<Header />
    	<ul>
		    <li><a href="/">HOME</a></li>
		    <li><a href="/about">ABOUT</a></li>
		    <li><a href="/menu">MENU</a></li>
        <li><a href="/booking">RESERVATIONS</a></li>
		    <li><a href="/order">ORDER ONLINE</a></li>
		    <li><a href="/login">LOG IN</a></li>
	    </ul>
    </nav>
  )
}

export default Nav;