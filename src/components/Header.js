import logo from '../images/Logo.svg';

function Header() {
  const description = 'Mediterranean restaurant, focused on traditional recipes served with a modern twist';
  return (
    <header>
      <meta name='description' content={description}/>
      <meta name='og:title' content="Little Lemon Restaurant's"/>
      <meta name='og:description' content={description}/>
      <meta name='og:image' content={logo}/>
    </header> 
  )
}

export default Header;