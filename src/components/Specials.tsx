import myDishes from "../data/Dishes.json";

interface DishProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const DeliveryIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="13"
      fill="none"
      viewBox="0 0 21 13"
    >
      <path
        fill="#000"
        d="M17.485 1.857C17.485.836 16.56 0 15.428 0h-3.086v1.857h3.086v2.46l-3.58 4.04h-3.62V3.714H4.114C1.841 3.714 0 5.376 0 7.43v2.785h2.057C2.057 11.756 3.435 13 5.143 13c1.707 0 3.085-1.244 3.085-2.786h4.608l4.65-5.246v-3.11zM5.143 11.143c-.566 0-1.029-.418-1.029-.929h2.057c0 .511-.463.929-1.028.929z"
      ></path>
      <path
        fill="#000"
        d="M8.228.929H3.086v1.857h5.142V.929zM17.485 7.429c-1.707 0-3.085 1.244-3.085 2.785 0 1.542 1.378 2.786 3.085 2.786 1.708 0 3.086-1.244 3.086-2.786 0-1.541-1.378-2.785-3.086-2.785zm0 3.714c-.565 0-1.028-.418-1.028-.929 0-.51.463-.928 1.028-.928.566 0 1.029.418 1.029.928 0 .511-.463.929-1.029.929z"
      ></path>
    </svg>
  );
};

function Card(props: DishProps) {
  return (
    <article>
      <img
        className="col-span-2 object-cover aspect-[4/3] rounded-t-xl"
        src={props.imageUrl}
        alt={props.name}
      />
      <div className="grid grid-cols-2 items-center p-5 gap-5 bg-highlight-1">
        <h1 className="font-serif text-2xl">{props.name}</h1>
        <h2 className="font-sans font-semibold text-right text-secondary-1">
          $ {props.price}
        </h2>
        <p className=" col-span-2 h-32 overflow-y-hidden hover:overflow-y-scroll font-sans font-light text-gray-700 text-md">
          {props.description}
        </p>
        <button className="col-span-2 flex items-baseline gap-x-2">
          <h3 className="font-serif font-medium text-xl">Order a delivery</h3>
          <DeliveryIcon />
        </button>
      </div>
    </article>
  );
}

function Specials() {
  return (
    <section
      id="menu"
      className="grid grid-cols-3 gap-x-5 gap-y-10 max-w-4xl mx-auto p-5 "
    >
      <h1 className="col-span-2 font-serif text-highlight-2 text-6xl">
        This week specials!
      </h1>
      <a
        href="#menu"
        className="m-auto mr-0 py-4 px-10 rounded-xl font-sans font-bold text-lg bg-primary-2"
      >
        Online Menu
      </a>
      {myDishes.slice(0, 3).map((dish) => (
        <Card
          name={dish.name}
          price={dish.price}
          imageUrl={dish.imageUrl}
          description={dish.description}
        />
      ))}
    </section>
  );
}

export default Specials;
