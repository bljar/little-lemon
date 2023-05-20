import {
  add,
  format,
  startOfMonth,
  sub,
  differenceInCalendarDays,
  startOfWeek,
  eachDayOfInterval,
  lastDayOfMonth,
  isEqual,
} from "date-fns";
import { useState, useCallback, Dispatch } from "react";
import { ChevronRight, ChevronLeft } from "./Icons";

interface datePickerProp {
  selectedDate: any;
  setSelectedDate: Dispatch<any>;
}

const dayValues = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function DatePicker(props: datePickerProp) {
  console.log(props.selectedDate);
  const [startDate, setStartDate] = useState<Date>(startOfMonth(new Date()));

  const NextMonth = useCallback(() => {
    setStartDate(add(startDate, { months: 1 }));
  }, [startDate]);

  const PrevMonth = useCallback(() => {
    setStartDate(sub(startDate, { months: 1 }));
  }, [startDate]);

  const selectDate = useCallback((date: Date) => {
    props.setSelectedDate(date);
  }, []);

  const monthDates = eachDayOfInterval({
    start: startDate,
    end: lastDayOfMonth(startDate),
  });

  const monthDatesBlank = Array.from({
    length: differenceInCalendarDays(startDate, startOfWeek(startDate)),
  });

  return (
    <div className="h-full w-full overflow-hidden rounded-lg bg-white p-4 shadow-lg">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => PrevMonth()}
            className="cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-yellow-500 "
          >
            <ChevronLeft className="inline-flex h-6 w-6 text-gray-400" />
          </button>
          <h4 className="text-lg font-bold text-gray-600">
            {format(startDate, "MMMM")}
          </h4>
          <button
            onClick={() => NextMonth()}
            className="cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-yellow-500 "
          >
            <ChevronRight className="inline-flex h-6 w-6 text-gray-400" />
          </button>
        </div>
        <h4 className="ml-1 text-lg font-normal text-gray-400">
          {format(startDate, "yyyy")}
        </h4>
      </div>

      <ul className="-mx-1 grid grid-cols-7">
        {dayValues.map((dayOfWeek: string, index) => (
          <li
            key={index}
            className="mb-1 aspect-square w-min p-1 text-center text-sm font-bold leading-loose"
          >
            {dayOfWeek}
          </li>
        ))}
      </ul>
      <ul className="-mx-1 grid grid-cols-7 gap-y-2">
        {monthDatesBlank.map((_, index) => (
          <li key={index} className="px-1"></li>
        ))}
        {monthDates.map((date: Date, index) => {
          const isDateSelected = isEqual(date, props.selectedDate);

          return (
            <li
              key={index}
              onClick={() => selectDate(date)}
              className={
                "cursor-pointer rounded-full px-1 text-center text-sm leading-loose transition  " +
                (isDateSelected
                  ? "bg-emerald-600 text-black"
                  : "text-gray-600 duration-100 ease-in-out hover:bg-emerald-100")
              }
            >
              {format(date, "dd")}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DatePicker;
