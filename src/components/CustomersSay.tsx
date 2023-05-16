import userReviews from "../data/Reviews.json";

interface ratingProps {
  rating: number;
}
interface reviewProps {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  userRating: number;
  comment: string;
  avatarUrl: string;
}
interface avatarProps {
  firstName: string;
  lastName: string;
  photoUrl: string;
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Rating(props: ratingProps) {
  const stars = Array.from({ length: props.rating }, (_, index) => index).map(
    (index) => (
      <li key={index}>
        <StarIcon />
      </li>
    )
  );
  return <ul className="flex">{stars}</ul>;
}

function Avatar(props: avatarProps) {
  if (props.photoUrl === "") {
    const initial =
      props.firstName[0] + (props.lastName.length ? props.lastName[0] : "");
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-300 text-white">
        {initial}
      </div>
    );
  } else {
    const fullName = props.firstName + " " + props.lastName;
    return (
      <img
        src={props.photoUrl}
        alt={fullName}
        className="h-14 w-14 flex-none rounded-full object-cover"
        loading="lazy"
        decoding="async"
      />
    );
  }
}

function Review(props: reviewProps) {
  return (
    <figure className="relative flex flex-col-reverse rounded-xl bg-primary-1 p-6">
      <blockquote className="mt-6 text-highlight-1 ">
        <p>{props.comment}</p>
      </blockquote>
      <figcaption className="flex items-center space-x-4">
        <Avatar
          firstName={props.firstName}
          lastName={props.lastName}
          photoUrl={props.avatarUrl}
        />
        <div>
          <Rating rating={props.userRating} />
          <div className="flex gap-x-2">
            <h3 className="text-2xl text-slate-50">{props.firstName}</h3>
            <h3 className="hidden">{props.lastName}</h3>
            <h4 className=" m-auto text-slate-300">@{props.userName}</h4>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

function CustomersSay() {
  const reviews = userReviews.slice(0, 6).map((review) => (
    <li key={review.userId} className="leading-6">
      <Review
        userId={review.userId}
        userName={review.userName}
        firstName={review.firstName}
        lastName={review.lastName}
        userRating={review.userRating}
        comment={review.comment}
        avatarUrl={review.avatarUrl}
      />
    </li>
  ));
  return (
    <section id="testimonials" className="my-10  bg-primary-2 py-10">
      <h1 className="mx-5 p-5 text-center">What our customers say!</h1>
      <ul className="mx-auto grid max-w-4xl grid-cols-1  gap-6 p-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews}
      </ul>
    </section>
  );
}

export default CustomersSay;
