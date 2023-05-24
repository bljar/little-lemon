import DatePicker from "./DatePicker";
import MyListBox from "./MyListBox";
import { useEffect, useState } from "react";
import RestaurantImg from "../assets/Restaurant.jpg";
import RestaurantChef from "../assets/RestaurantChef.jpg";
import RestaurantFood from "../assets/RestaurantFood.jpg";

function ResForm() {
  const [resDate, setResDate] = useState(null);
  const [resTime, setResTime] = useState("");
  const [resGuest, setResGuest] = useState(0);
  const [resOccasion, setResOccasion] = useState("");
  const [resSeating, setResSeating] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"
    );
  });

  const clearForm = () => {
    setResDate(null);
    setResTime("");
    setResGuest(0);
    setResOccasion("");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("date: " + resDate);
    console.log("time: " + resTime);
    console.log("guest: " + resGuest);
    console.log("occasion: " + resOccasion);
    alert("Reservation created!");
    clearForm();
  };
  //   <p>
  //   Have a wonderful time dining at our restaurant with your friends and
  //   family
  // </p>
  const availableTime = [
    { id: 0, value: "17:00", placeholder: "5:00 pm", unavailable: false },
    { id: 1, value: "18:00", placeholder: "6:00 pm", unavailable: false },
    { id: 2, value: "19:00", placeholder: "7:00 pm", unavailable: false },
    { id: 3, value: "20:00", placeholder: "8:00 pm", unavailable: false },
    { id: 4, value: "21:00", placeholder: "9:00 pm", unavailable: false },
    { id: 5, value: "22:00", placeholder: "10:00 pm", unavailable: false },
  ];

  const numDiners = [
    { id: 1, value: 1, placeholder: "1 Diner", unavailable: false },
    { id: 2, value: 2, placeholder: "2 Diners", unavailable: false },
    { id: 3, value: 3, placeholder: "3 Diners", unavailable: false },
    { id: 4, value: 4, placeholder: "4 Diners", unavailable: false },
    { id: 5, value: 5, placeholder: "5 Diners", unavailable: false },
    { id: 6, value: 6, placeholder: "6 Diners", unavailable: false },
    { id: 7, value: 7, placeholder: "7 Diners", unavailable: false },
    { id: 8, value: 8, placeholder: "8 Diners", unavailable: false },
    { id: 9, value: 9, placeholder: "9 Diners", unavailable: false },
    { id: 10, value: 10, placeholder: "10 Diners", unavailable: false },
  ];

  const occasions = [
    { id: 0, value: "Birthday", placeholder: "Birthday", unavailable: false },
    {
      id: 1,
      value: "Engagement",
      placeholder: "Engagement",
      unavailable: false,
    },
    {
      id: 2,
      value: "Anniversary",
      placeholder: "Anniversary",
      unavailable: false,
    },
  ];

  const seating = [
    {
      id: 0,
      value: "indoor",
      placeholder: "Indoor seating",
      unavailable: false,
    },
    {
      id: 0,
      value: "outdoor",
      placeholder: "Outdoor seating",
      unavailable: false,
    },
  ];

  return (
    <>
      <section id="reservation" className="bg-primary-1 pb-10">
        <h1 className="mx-auto max-w-4xl p-5 pb-5 text-center text-primary-2 sm:text-left">
          Reservation
        </h1>
        <form className="mx-auto grid max-w-4xl gap-8 px-5 font-sans sm:grid-cols-2">
          <label
            htmlFor="indoor-seating"
            className="relative mx-auto flex h-min w-full max-w-sm items-center gap-x-4 sm:ml-0"
          >
            <input
              className="border-2 border-highlight-1 bg-primary-1 checked:border-2 checked:border-highlight-1 checked:bg-primary-1 hover:checked:bg-primary-1 focus:text-primary-1 focus:ring-0 focus:checked:ring-0"
              type="radio"
              id="indoor-seating"
              name="seating"
              value="indoor"
            />
            <span className="text-xl font-bold text-highlight-1">
              Indoor seating
            </span>
          </label>
          <label
            htmlFor="outdoor-seating"
            className="relative mx-auto flex h-full w-full max-w-sm items-center gap-x-4 sm:mr-0"
          >
            <input
              className="border-2 border-highlight-1 bg-primary-1 checked:border-2 checked:border-highlight-1 checked:bg-primary-1 hover:checked:bg-primary-1 focus:text-primary-1 focus:ring-0 focus:checked:ring-0"
              type="radio"
              id="outdoor-seating"
              name="seating"
              value="outdoor"
            />
            <span className="text-xl font-bold text-highlight-1">
              Outdoor seating
            </span>
          </label>
          <label htmlFor="date">
            <span className="mx-auto mb-1 block max-w-sm text-highlight-1 sm:ml-0">
              Date
            </span>
            <DatePicker
              id="date"
              className="relative mx-auto h-full max-w-sm sm:ml-0"
              selectedDate={resDate}
              setSelectedDate={setResDate}
            />
          </label>
          <label htmlFor="reservation-guests">
            <span className="mx-auto mb-1 block max-w-sm text-highlight-1 sm:mr-0">
              Number of Diners
            </span>
            <MyListBox
              id="guests"
              className="relative mx-auto h-full max-w-sm sm:mr-0"
              selected={resGuest}
              setSelected={setResGuest}
              placeholder="No. of Diners"
              icon="person"
              lists={numDiners}
            />
          </label>
          <label htmlFor="reservation-occasion">
            <span className="mx-auto mb-1 block max-w-sm text-highlight-1 sm:ml-0">
              Occasion
            </span>
            <MyListBox
              id="occasion"
              className="relative mx-auto h-full max-w-sm sm:ml-0"
              selected={resOccasion}
              setSelected={setResOccasion}
              placeholder="Occasion"
              icon="wine-glasses"
              lists={occasions}
            />
          </label>
          <label htmlFor="reservation-time">
            <span className="mx-auto mb-1 block max-w-sm text-highlight-1 sm:mr-0">
              Time
            </span>
            <MyListBox
              id="time"
              className="relative mx-auto h-full max-w-sm sm:mr-0"
              selected={resTime}
              setSelected={setResTime}
              placeholder="Select time"
              icon="alarm"
              lists={availableTime}
            />
          </label>
        </form>
      </section>
      <section className="my-5">
        <figure className="mx-auto flex max-w-sm justify-between gap-x-5 overflow-x-clip p-5 hover:overflow-x-auto sm:max-w-4xl">
          <img
            src={RestaurantImg}
            alt="Restaurant Image"
            className="aspect-[6/5] w-60 rounded-xl object-cover drop-shadow-xl"
          />
          <img
            src={RestaurantChef}
            alt="Restaurant Chef"
            className="aspect-[6/5] w-60 rounded-xl object-cover drop-shadow-xl"
          />
          <img
            src={RestaurantFood}
            alt="Restaurant Food"
            className="aspect-[6/5] w-60 rounded-xl object-cover drop-shadow-xl"
          />
        </figure>
        <button className=" mx-auto mb-20 mt-10 block rounded-xl bg-primary-2 px-20 py-2 text-xl font-bold drop-shadow hover:drop-shadow-xl">
          <a href="">Reserve a table</a>
        </button>
      </section>
    </>
  );
}

export default ResForm;
