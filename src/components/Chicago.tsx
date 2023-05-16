import MarioAdrianA from "../assets/MarioAdrianA.jpg";
import MarioAdrianB from "../assets/MarioAdrianB.jpg";

function Chicago() {
  return (
    <section
      id="about"
      className="mx-auto mt-10 grid max-w-4xl grid-cols-2 p-5"
    >
      <h1 className="col-start-1 max-w-xs leading-10 text-primary-1">
        Little Lemon
      </h1>
      <h2 className="col-start-1 max-w-xs">Chicago</h2>
      <p className="col-start-1 mt-5 max-w-xs">
        We are family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <div className="col-start-2 row-span-4 row-start-1 ml-auto flex -space-x-24">
        <img
          className="z-10 mt-20 aspect-[15/16] h-1/2 rounded-xl object-cover"
          src={MarioAdrianA}
          alt="Mario and Adrian A"
        />
        <img
          className="z-0 mb-20 aspect-[15/16] h-1/2 rounded-xl object-cover"
          src={MarioAdrianB}
          alt="Mario and Adrian B"
        />
      </div>
    </section>
  );
}

export default Chicago;
