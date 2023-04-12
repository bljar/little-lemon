import logo from '../images/Logo.svg';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt='Logo' />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;