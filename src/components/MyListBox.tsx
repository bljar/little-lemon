import { Dispatch, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDown, ChevronUp, Person, WineGlasses, Alarm } from "./Icons";

interface listBoxProps {
  id: string;
  className: string;
  selected: any;
  setSelected: Dispatch<any>;
  placeholder: string;
  icon: string;
  lists: {
    id: number;
    value: number | string;
    placeholder: string;
    unavailable: boolean;
  }[];
}

const selectIcon = (iconName: string) => {
  switch (iconName) {
    case "person":
      return <Person className="max-h-12" />;
    case "wine-glasses":
      return <WineGlasses className="max-h-12" />;
    case "alarm":
      return <Alarm className="max-h-12" />;
    default:
      return;
  }
};

function MyListBox(props: listBoxProps) {
  const [valueSelected, setValueSelected] = useState(props.placeholder);

  return (
    <div id={props.id} className={props.className}>
      <Listbox value={props.selected} onChange={props.setSelected}>
        <Listbox.Button
          as="div"
          className={`relative z-0 flex cursor-pointer items-center justify-between rounded-md bg-highlight-1 px-4 py-3 text-primary-1 drop-shadow-lg ${
            props.selected && "bg-primary-1 text-white"
          }`}
        >
          {selectIcon(props.icon)}
          <span className="text-sans block text-xl font-bold">
            {valueSelected}
          </span>
          {props.selected ? (
            <ChevronUp className="mr-2 h-6" />
          ) : (
            <ChevronDown className="mr-2 h-6" />
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Listbox.Options
            className={`absolute z-10 mt-2 grid w-full cursor-pointer overflow-auto border bg-white shadow-lg focus:outline-none ${
              props.lists.length > 5 && "grid-cols-2"
            }`}
          >
            {props.lists.map((list) => (
              <Listbox.Option
                key={list.id}
                className={({ active }) =>
                  `relative border border-gray-200 py-4 text-center text-lg font-bold ${
                    active ? "bg-primary-1 text-white" : "text-primary-1"
                  }`
                }
                value={list.value}
                disabled={list.unavailable}
              >
                {({ selected }) => {
                  selected && setValueSelected(list.placeholder);
                  return (
                    <span className="block truncate font-bold">
                      {list.placeholder}
                    </span>
                  );
                }}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}

export default MyListBox;
