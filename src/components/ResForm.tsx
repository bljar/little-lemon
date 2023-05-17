import { useEffect, useState } from "react";
import "./BookingPage.css";

function BookingPage() {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [resGuest, setResGuest] = useState(1);
  const [resOccasion, setResOccasion] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    );
  });

  const clearForm = () => {
    setResDate("");
    setResTime("");
    setResGuest(1);
    setResOccasion("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(resDate);
    console.log(resTime);
    console.log(resGuest);
    console.log(resOccasion);
    alert("Reservation created!");
    clearForm();
  };

  return (
    <section id="reservation">
      <h1>Reserve a table</h1>
      <p>
        Have a wonderful time dining at our restaurant with your friends and
        family
      </p>
      <form className="res-form" onSubmit={handleSubmit}>
        <fieldset className="res-fieldset">
          <label className="res-label" htmlFor="res-date">
            Choose date
          </label>
          <input
            className="res-input"
            type="date"
            id="res-date"
            value={resDate}
            onChange={(e) => setResDate(e.target.value)}
          />
        </fieldset>
        <fieldset className="res-fieldset">
          <label className="res-label" htmlFor="res-time">
            Choose time
          </label>
          <select
            className="res-select"
            id="res-time "
            value={resTime}
            onChange={(e) => setResTime(e.target.value)}
          >
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </fieldset>
        <fieldset className="res-fieldset">
          <label className="res-label" htmlFor="guests">
            Number of guests
          </label>
          <input
            className="res-input"
            type="number"
            value={resGuest}
            onChange={(e) => setResGuest(parseInt(e.target.value))}
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          />
        </fieldset>
        <fieldset className="res-fieldset">
          <label className="res-label" htmlFor="occasion">
            Occasion
          </label>
          <select
            className="res-select"
            id="occasion"
            value={resOccasion}
            onChange={(e) => setResOccasion(e.target.value)}
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </fieldset>
        <fieldset className="res-fieldset">
          <button className="res-submit" type="submit" value="">
            Make Your reservation
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default BookingPage;
