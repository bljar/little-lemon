import restaurantFood from "../assets/RestaurantFood.jpg";

function CallToAction() {
  return (
    <section id="hero" className="mb-20 bg-primary-1 sm:h-96">
      <article className="content:center mx-auto max-w-4xl p-5 sm:grid sm:grid-cols-2">
        <h1 className="mt-5 max-w-xs leading-10 text-primary-2">
          Little Lemon
        </h1>
        <h2 className="max-w-xs leading-8 text-slate-100">Chicago</h2>
        <img
          src={restaurantFood}
          alt="Restaurant's Food"
          className="mt-6 aspect-[4/3] rounded-2xl object-cover shadow-xl sm:col-start-2 sm:row-span-5 sm:row-start-1 sm:ml-auto sm:mt-3 sm:aspect-[3/4] sm:max-w-xs"
        />
        <p className="my-6 text-lg text-slate-100 sm:max-w-xs sm:pr-10">
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="btn-primary px-6 py-2 sm:m-2 sm:w-max">
          Reserve a table
        </button>
      </article>
    </section>
  );
}

export default CallToAction;
