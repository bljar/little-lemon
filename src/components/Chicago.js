import './Chicago.css';
import MarioAdrianA from '../images/MarioAdrianA.jpg';
import MarioAdrianB from '../images/MarioAdrianB.jpg';

function Chicago() {
  return (
    <section id="about">
      <h1 className="title">Little Lemon</h1>
      <h2 className="subtitle">Chicago</h2>
      <p className="paragraph">
        We are family owned Mediterranean restaurant, 
        focused on traditional recipes served with a modern twist.
      </p>
      <img className="image2" src={MarioAdrianB} alt="Mario and Adrian B" />
      <img className="image1" src={MarioAdrianA} alt="Mario and Adrian A" />
    </section>
  )
}

export default Chicago;