import './Nav.css';
import Header from './Header';

function Nav() {
  return (
    <nav>
			<Header />
    	<ul>
		    <li><a href="/">HOME</a></li>
		    <li><a href="/Chicago">ABOUT</a></li>
		    <li><a href="/Specials">MENU</a></li>
        <li><a href="/">RESERVATIONS</a></li>
		    <li><a href="/">ORDER ONLINE</a></li>
		    <li><a href="/">LOG IN</a></li>
	    </ul>
    </nav>
  )
}

export default Nav;