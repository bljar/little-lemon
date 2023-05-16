// import "../styles/Header.css";

import { Logo } from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <header className="mx-auto flex max-w-4xl justify-between py-4">
      <div className="flex items-center">
        <Logo className="h-14 w-14" />
        <h1 className="font-serif text-xl font-bold tracking-widest text-primary-1">
          LITTLE LEMON
        </h1>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
