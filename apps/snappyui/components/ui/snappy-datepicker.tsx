"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type DatePickerProps = {
  initialDate?: Date;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  format?: string;
  label?: string;
  showClearButton?: boolean;
  showTodayButton?: boolean;
  className?: string;
  containerClassName?: string;
  inputClassName?: string;
  calendarClassName?: string;
  // Add these new props:
  todayButtonClassName?: string;
  clearButtonClassName?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

function DatePicker({ ref, initialDate, onChange, placeholder = "Select date", format = "MM/DD/YYYY", className = "", containerClassName = "", inputClassName = "", calendarClassName = "", todayButtonClassName = "", clearButtonClassName = "", label, showClearButton = true, showTodayButton = true, ...props }: DatePickerProps & { ref?: React.Ref<HTMLInputElement> }) {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(initialDate ? formatDate(initialDate) : "");

  const datePickerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Forward the ref
  useEffect(() => {
    if (ref) {
      if (typeof ref === "function") {
        ref?.(inputRef.current);
      }
      else {
        ref.current = inputRef.current;
      }
    }
  }, [ref]);

  // Format date to string (MM/DD/YYYY by default)
  function formatDate(date: Date): string {
    if (!date)
      return "";
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    let formatted = format.replace("MM", month);
    formatted = formatted.replace("DD", day);
    formatted = formatted.replace("YYYY", year.toString());

    return formatted;
  }

  // Parse date from string input
  function parseDate(dateString: string): Date | null {
    if (format === "MM/DD/YYYY") {
      const parts = dateString.split("/");
      if (parts.length === 3) {
        const month = Number.parseInt(parts[0], 10) - 1;
        const day = Number.parseInt(parts[1], 10);
        const year = Number.parseInt(parts[2], 10);
        const date = new Date(year, month, day);

        // Check if the date is valid
        if (!Number.isNaN(date.getTime())) {
          return date;
        }
      }
    }
    return null;
  }

  // Handle click outside to close the date picker
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Update input when selected date changes
  useEffect(() => {
    if (selectedDate) {
      setInputValue(formatDate(selectedDate));
      if (onChange) {
        onChange(selectedDate);
      }
    }
  }, [selectedDate, onChange, format]);

  // Get days in month
  function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
  }

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  function getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay();
  }

  // Navigate to the previous month
  function prevMonth(): void {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }

  // Navigate to the next month
  function nextMonth(): void {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }

  // Handle date selection
  function handleDateSelect(day: number): void {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
    );
    setSelectedDate(newDate);
    setIsOpen(false);
  }

  // Handle input change
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value;
    setInputValue(value);

    const date = parseDate(value);
    if (date) {
      setSelectedDate(date);
      setCurrentDate(date);
    }
    else if (value === "") {
      setSelectedDate(null);
      if (onChange) {
        onChange(null);
      }
    }
  }

  // Generate calendar days
  function renderCalendarDays(): React.ReactNode[] {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    const days: React.ReactNode[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="text-center p-2 text-gray-300 dark:text-gray-600"></div>,
      );
    }

    // Add cells for days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate
        && date.getDate() === selectedDate.getDate()
        && date.getMonth() === selectedDate.getMonth()
        && date.getFullYear() === selectedDate.getFullYear();

      const isToday = new Date().toDateString() === date.toDateString();

      days.push(
        <div
          key={day}
          onClick={() => handleDateSelect(day)}
          className={`text-center p-2 cursor-pointer rounded transition-colors
            ${isSelected
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"}
            ${isToday && !isSelected ? "border border-blue-400" : ""}
          `}
        >
          {day}
        </div>,
      );
    }

    return days;
  }

  return (
    <div className={`transition-all duration-300 ease-in-out w-full ${className}`} ref={datePickerRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div className={`relative ${containerClassName}`} ref={containerRef}>
        <input
          ref={inputRef}
          type="text"
          className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 transition-colors ${inputClassName}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setIsOpen(!isOpen)}
          {...props}
        />
        <div
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Calendar size={20} className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>

      {isOpen && (
        <div
          className={`relative mt-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg z-10 transition-all duration-300 overflow-hidden w-full ${calendarClassName}`}
        >
          <div className="flex justify-between items-center p-2 border-b dark:border-gray-700">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              type="button"
            >
              <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
            </button>

            <div className="font-medium text-gray-900 dark:text-gray-100">
              {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </div>

            <button
              onClick={nextMonth}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              type="button"
            >
              <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 p-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
              <div key={day} className="text-center text-gray-500 dark:text-gray-400 text-xs font-medium p-1">
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>

          {(showTodayButton || showClearButton) && (
            <div className="border-t dark:border-gray-700 p-2 text-right">
              {showTodayButton && (
                <button
                  onClick={() => {
                    const today = new Date();
                    setSelectedDate(today);
                    setCurrentDate(today);
                    setIsOpen(false);
                  }}
                  className={`text-sm text-blue-500 hover:text-blue-700 px-2 py-1 transition-colors ${todayButtonClassName}`}
                  type="button"
                >
                  Today
                </button>
              )}
              {showClearButton && (
                <button
                  onClick={() => {
                    setSelectedDate(null);
                    setInputValue("");
                    if (onChange) {
                      onChange(null);
                    }
                    setIsOpen(false);
                  }}
                  className={`text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 ml-2 px-2 py-1 transition-colors ${clearButtonClassName}`}
                  type="button"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

DatePicker.displayName = "DatePicker";

export default DatePicker;
