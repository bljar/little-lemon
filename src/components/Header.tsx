// import "../styles/Header.css";

import { Logo } from "./Logo";

function Header() {
  return (
    <header className="flex items-center">
      <Logo className="h-14 w-14" />
      <h1 className="font-serif text-xl font-bold tracking-widest text-primary-1">
        LITTLE LEMON
      </h1>
    </header>
  );
}

export default Header;
