// import "../styles/Chicago.css";
import MarioAdrianA from "../assets/MarioAdrianA.jpg";
import MarioAdrianB from "../assets/MarioAdrianB.jpg";

function Chicago() {
  return (
    <section id="about" className="mx-auto grid max-w-4xl p-5">
      <h1 className="">Little Lemon</h1>
      <h2 className="subtitle">Chicago</h2>
      <p className="paragraph">
        We are family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <div className="flex -space-x-10">
        <img
          className="z-10 h-48"
          src={MarioAdrianA}
          alt="Mario and Adrian A"
        />
        <img
          className="z-0 h-96 "
          src={MarioAdrianB}
          alt="Mario and Adrian B"
        />
      </div>
    </section>
  );
}

export default Chicago;
