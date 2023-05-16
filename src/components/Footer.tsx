import { FooterLogo } from "./Logo";

function Footer() {
  return (
    <footer className="bg-primary-1 py-10">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-5 px-5 md:grid-cols-4">
        <div>
          <FooterLogo className="h-48" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-primary-2">
            Doormat Navigation
          </h4>
          <ul className="text-base text-highlight-1">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="/about">About</a>
            </li>
            <li className="hover:underline">
              <a href="/menu">Menu</a>
            </li>
            <li className="hover:underline">
              <a href="/booking">Reservations</a>
            </li>
            <li className="hover:underline">
              <a href="/order">Order Online</a>
            </li>
            <li className="hover:underline">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-primary-2">Contact</h4>
          <ul className="text-base text-highlight-1">
            <li className="hover:underline">
              <a href="/">Adress</a>
            </li>
            <li className="hover:underline">
              <a href="/">Phone number</a>
            </li>
            <li className="hover:underline">
              <a href="/">Email</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-primary-2">
            Social Media Links
          </h4>
          <ul className="text-base text-highlight-1">
            <li className="hover:underline">
              <a href="/">Adress</a>
            </li>
            <li className="hover:underline">
              <a href="/">Phone number</a>
            </li>
            <li className="hover:underline">
              <a href="/">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
