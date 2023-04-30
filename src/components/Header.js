import logo from '../images/logo.svg';

function Header() {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Little Lemon's Logo" />
      </a>
    </header> 
  )
}

export default Header;