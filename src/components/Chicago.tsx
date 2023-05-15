import MarioAdrianA from "../assets/MarioAdrianA.jpg";
import MarioAdrianB from "../assets/MarioAdrianB.jpg";

function Chicago() {
  return (
    <section id="about" className="">
      <h1 className="">Little Lemon</h1>
      <h2 className="">Chicago</h2>
      <p className="">
        We are family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <div className="">
        <img
          className="object-cover w-48 h-96"
          src={MarioAdrianB}
          alt="Mario and Adrian B"
        />
        <img
          className="object-cover w-58 h-96"
          src={MarioAdrianA}
          alt="Mario and Adrian A"
        />
      </div>
    </section>
  );
}

export default Chicago;
