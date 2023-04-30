import './CallToAction.css';
import restaurantfood from '../images/restauranfood.jpg';

function CallToAction() {
  return(
    <section id="hero">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <img src={restaurantfood} alt="Restaurant's Food" />
      <p>
        "We are family owned Mediterranean restaurant, 
        focused on traditional recipes served with a modern twist."
      </p>
      <button className="button-primary">Reserve a table</button>
    </section>
  )
}

export default CallToAction;