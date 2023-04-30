import './Specials.css';
import mydishes from './dishes.json';
import deliveryIcon from "../images/DeliveryIcon.svg"

// console.log(dishes.slice(0, 3));

function Card(props) {
  return (
    <article className="dish">
      <h1 className="dish-name">{props.dish.name}</h1>
      <h2 className="dish-price">$ {props.dish.price}</h2>
      <img 
        className="dish-image" 
        src={process.env.PUBLIC_URL + props.dish.image} 
        alt={props.dish.name}
      />
      <p className="dish-description">{props.dish.description}</p>
      <button className="delivery-button">Order a delivery</button>
      <img 
        className="delivery-icon" 
        src={deliveryIcon} 
        alt="Delivery Icon"
      />
    </article>
  )
}

function Specials() {
  const listDishes = mydishes.slice(0, 3).map(dish =>
    <li key={dish.id}><Card dish={dish} /></li>
  );

  return (
    <section id="highlights">
      <h1 className="title">This week specials!</h1>
      <button className="button-primary">Online Menu</button>
      <ul className="dishes-cards">{listDishes}</ul>
    </section>
  )
}

export default Specials;