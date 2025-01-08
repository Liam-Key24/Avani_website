import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'; // Import arrow icons

interface InputCalendarProps {
  selectedDate: {
    day: number;
    month: number;
    year: number;
  };
  onDateChange: (date: { day: number; month: number; year: number }) => void;
}

const InputCalendar = ({ selectedDate, onDateChange }: InputCalendarProps) => {
  const handleIncrement = (type: string) => {
    const newDate = { ...selectedDate };

    if (type === "day") {
      const daysInMonth = new Date(newDate.year, newDate.month, 0).getDate();
      newDate.day = newDate.day < daysInMonth ? newDate.day + 1 : 1;
      if (newDate.day === 1) {
        newDate.month = newDate.month < 12 ? newDate.month + 1 : 1;
        if (newDate.month === 1) newDate.year += 1;
      }
    } else if (type === "month") {
      newDate.month = newDate.month < 12 ? newDate.month + 1 : 1;
      if (newDate.month === 1) newDate.year += 1;
    } else if (type === "year") {
      newDate.year += 1;
    }

    onDateChange(newDate);
  };

  const handleDecrement = (type: string) => {
    const newDate = { ...selectedDate };

    if (type === "day") {
      newDate.day = newDate.day > 1 ? newDate.day - 1 : new Date(newDate.year, newDate.month - 1, 0).getDate();
      if (newDate.day === new Date(newDate.year, newDate.month - 1, 0).getDate()) {
        newDate.month = newDate.month > 1 ? newDate.month - 1 : 12;
        if (newDate.month === 12) newDate.year -= 1;
      }
    } else if (type === "month") {
      newDate.month = newDate.month > 1 ? newDate.month - 1 : 12;
      if (newDate.month === 12) newDate.year -= 1;
    } else if (type === "year") {
      newDate.year -= 1;
    }

    onDateChange(newDate);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Date selectors in horizontal layout */}
      <div className="flex items-center space-x-6">
        {/* Day Selector */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleIncrement("day")}
            className="p-1 text-gray-600 hover:text-gray-800"
            aria-label="Increment day"
          >
            <FaChevronUp size={20} />
          </button>
          <span className="text-lg font-semibold my-1">{selectedDate.day}</span>
          <button
            onClick={() => handleDecrement("day")}
            className="p-1 text-gray-600 hover:text-gray-800"
            aria-label="Decrement day"
          >
            <FaChevronDown size={20} />
          </button>
          <span className="text-sm text-gray-500 mt-1">Day</span>
        </div>

        {/* Month Selector */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleIncrement("month")}
            className="p-1 text-gray-600 hover:text-gray-800"
            aria-label="Increment month"
          >
            <FaChevronUp size={20} />
          </button>
          <span className="text-lg font-semibold my-1">{selectedDate.month}</span>
          <button
            onClick={() => handleDecrement("month")}
            className="p-1 text-gray-600 hover:text-gray-800"
            aria-label="Decrement month"
          >
            <FaChevronDown size={20} />
          </button>
          <span className="text-sm text-gray-500 mt-1">Month</span>
        </div>

        {/* Year Selector */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleIncrement("year")}
            className="p-1 text-gray-600 hover:text-gray-800"
            aria-label="Increment year"
          >
            <FaChevronUp size={20} />
          </button>
          <span className="text-lg font-semibold my-1">{selectedDate.year}</span>
          <button
            onClick={() => handleDecrement("year")}
            className="p-1 text-gray-600 hover:text-gray-800"
            aria-label="Decrement year"
          >
            <FaChevronDown size={20} />
          </button>
          <span className="text-sm text-gray-500 mt-1">Year</span>
        </div>
      </div>

      {/* Selected Date Display */}
      <div className="mt-4 text-lg font-semibold text-gray-700">
        {`${selectedDate.day}/${selectedDate.month}/${selectedDate.year}`}
      </div>
    </div>
  );
};

export default InputCalendar;
