import './CustomersSay.css';
import userReviews from './reviews.json';
import starIcon from '../images/Star.svg';

function Rating({rating}) {
  const stars = Array.from({ length: rating }, (_, index) => index).map((index) => 
    <li key={index}><img src={starIcon} alt="star" /></li>
  );
  return <ul className="rating">{stars}</ul>
}

function Avatar({firstName, lastName}) {
  const initial = firstName[0] + (lastName.length ? lastName[0] : "");
  return <div className="initial-avatar">{initial}</div>
}

function Review(props) {
  return (
    <article className="review">
     <Rating rating={props.user.userRating} />
     <h1 className="name">{props.user.firstName}</h1>
     <Avatar firstName={props.user.firstName} lastName={props.user.lastName}/>
     <p className="comment">{props.user.comment}</p>
    </article>
  )
}

function CustomersSay() {
  const reviews = userReviews.slice(0, 4).map((review) =>
    <li key={review.userId}><Review user={review} /></li>
  );
  return (
    <section id="testimonials">
      <h1>What our customers say!</h1>
      <ul className="reviews-cards">{reviews}</ul>
    </section>
  )
}

export default CustomersSay;