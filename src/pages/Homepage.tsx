import CallToAction from "../components/CallToAction";
import Chicago from "../components/Chicago";
import CustomersSay from "../components/CustomersSay";
import Specials from "../components/Specials";

function Homepage() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default Homepage;