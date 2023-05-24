import {
  add,
  format,
  startOfMonth,
  sub,
  isSameMonth,
  startOfWeek,
  eachDayOfInterval,
  lastDayOfMonth,
  isEqual,
  endOfWeek,
} from "date-fns";
import { Fragment, useState, useCallback, Dispatch } from "react";
import { ChevronRight, ChevronLeft } from "./Icons";
import { Popover, Transition } from "@headlessui/react";
import { CalendarIcon, ChevronDown, ChevronUp } from "./Icons";

interface datePickerProp {
  id: string;
  className: string;
  selectedDate: any;
  setSelectedDate: Dispatch<any>;
}

const dayValues = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function DatePicker(props: datePickerProp) {
  const [startDate, setStartDate] = useState<Date>(startOfMonth(new Date()));

  const NextMonth = useCallback(() => {
    setStartDate(add(startDate, { months: 1 }));
  }, [startDate]);

  const PrevMonth = useCallback(() => {
    setStartDate(sub(startDate, { months: 1 }));
  }, [startDate]);

  const selectDate = useCallback(
    (date: Date, close: any) => {
      if (isSameMonth(date, startDate)) {
        props.setSelectedDate(date);
        close();
      } else {
        format(date, "L") > format(startDate, "L") && NextMonth();
        format(date, "L") < format(startDate, "L") && PrevMonth();
      }
    },
    [startDate]
  );

  const monthDates = eachDayOfInterval({
    start: startOfWeek(startDate),
    end: endOfWeek(lastDayOfMonth(startDate)),
  });

  return (
    <Popover className={props.className} id={props.id}>
      <Popover.Button
        as="div"
        className={`flex cursor-pointer items-center justify-between rounded-md bg-highlight-1 px-4 py-3 text-primary-1 drop-shadow-lg ${
          props.selectedDate && "bg-primary-1 text-white"
        }`}
      >
        <CalendarIcon className="max-h-12" />
        <span className="text-sans block text-xl font-bold">
          {props.selectedDate
            ? format(props.selectedDate, "MMMM, dd")
            : "Select Date"}
        </span>
        {props.selectedDate ? (
          <ChevronUp className="mr-2 h-6" />
        ) : (
          <ChevronDown className="mr-2 h-6" />
        )}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-full -translate-x-1/2 transform">
          {({ close }) => (
            <div className="h-full w-full overflow-hidden rounded-xl bg-white p-4 font-sans font-medium text-primary-1 shadow-lg">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="text-lg font-bold ">
                  {format(startDate, "MMMM")}
                  <span className="ml-1 font-normal">
                    {format(startDate, "yyyy")}
                  </span>
                </h4>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => PrevMonth()}
                    className="inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-gray-200"
                  >
                    <ChevronLeft className="inline-flex h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => NextMonth()}
                    className="inline-flex cursor-pointer rounded-full p-1 transition duration-100 ease-in-out hover:bg-gray-200"
                  >
                    <ChevronRight className="inline-flex h-5 w-5" />
                  </button>
                </div>
              </div>

              <ul className="grid grid-cols-7">
                {dayValues.map((dayOfWeek: string, index) => (
                  <li key={index} className="p-3 text-center text-sm">
                    {dayOfWeek}
                  </li>
                ))}
              </ul>
              <ul className="grid grid-cols-7 border border-gray-200">
                {monthDates.map((date: Date, index) => (
                  <li
                    key={index}
                    onClick={() => selectDate(date, close)}
                    className={`
              cursor-pointer border p-3 text-center text-sm transition duration-100 ease-in-out
              ${
                isEqual(date, props.selectedDate)
                  ? "border-primary-1 bg-primary-1 text-white "
                  : "text-gray-600 hover:bg-gray-200 "
              }
              ${!isSameMonth(date, startDate) && "bg-gray-100  "}
            `}
                  >
                    {format(date, "dd")}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default DatePicker;
