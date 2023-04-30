import './Footer.css';
import logoFooter from '../images/LogoFooter.svg';

function Footer() {
  return (
    <footer>
			<ul className="footer-section">
				<li>
					<img src={logoFooter} alt="Little Lemon Logo" />
				</li>
				<li>
					<h1 className="footer-header">Doormat Navigation</h1>
					<ul className="footer-item">
		  		  <li><a href="/">Home</a></li>
		  		  <li><a href="/Chicago">About</a></li>
		  		  <li><a href="/Specials">Menu</a></li>
      		  <li><a href="/">Reservations</a></li>
		  		  <li><a href="/">Order Online</a></li>
		  		  <li><a href="/">Login</a></li>
	    		</ul>
				</li>
				<li>
					<h1 className="footer-header">Contact</h1>
					<ul className="footer-item">
      		  <li><a href="/">Adress</a></li>
		  		  <li><a href="/">Phone number</a></li>
		  		  <li><a href="/">Email</a></li>
					</ul>
				</li>
				<li>
					<h1 className="footer-header">Social Media Links</h1>
					<ul className="footer-item">
      		  <li><a href="/">Adress</a></li>
		  		  <li><a href="/">Phone number</a></li>
		  		  <li><a href="/">Email</a></li>
					</ul>
				</li>
			</ul>
    </footer>
  )
}

export default Footer;