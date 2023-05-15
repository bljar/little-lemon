import restaurantFood from "../assets/RestaurantFood.jpg";

function CallToAction() {
  return (
    <section id="hero" className="sm:h-96 bg-primary-1 mb-20">
      <article className="content:center max-w-4xl sm:grid sm:grid-cols-2 mx-auto p-5">
        <h1 className="font-serif text-primary-2 text-6xl leading-10 max-w-xs mt-5">
          Little Lemon
        </h1>
        <h2 className="font-serif text-slate-100 text-4xl leading-8 max-w-xs">
          Chicago
        </h2>
        <img
          src={restaurantFood}
          alt="Restaurant's Food"
          className="sm:col-start-2 sm:row-start-1 sm:row-span-5 mt-6 sm:mt-3 object-cover aspect-[4/3] sm:aspect-[3/4] sm:max-w-xs sm:ml-auto rounded-2xl shadow-xl"
        />
        <p className="font-sans text-lg text-slate-100 sm:max-w-xs my-6 sm:pr-10">
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="font-sans font-bold text-lg text-black bg-primary-2 rounded-2xl sm:w-max sm:m-2 px-6 py-2">
          Reserve a table
        </button>
      </article>
    </section>
  );
}

export default CallToAction;
