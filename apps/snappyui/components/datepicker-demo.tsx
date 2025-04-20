// components/ui/date-picker-demo.tsx
"use client";

import React, { useState } from "react";

import DatePicker from "@/components/ui/snappy-datepicker";

type DatePickerDemoProps = {
  label?: string;
  placeholder?: string;
  format?: string;
  initialDate?: Date;
  showClearButton?: boolean;
  showTodayButton?: boolean;
  disabled?: boolean;
  className?: string;
  displaySelectedDate?: boolean;
};

const DatePickerDemo: React.FC<DatePickerDemoProps> = ({
  label,
  placeholder,
  format,
  initialDate,
  showClearButton,
  showTodayButton,
  disabled,
  className,
  displaySelectedDate = false,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);

  return (
    <div className="space-y-2 transition-all duration-300 ease-in-out w-[300px]">
      <DatePicker
        label={label}
        placeholder={placeholder}
        format={format}
        initialDate={initialDate}
        showClearButton={showClearButton}
        showTodayButton={showTodayButton}
        disabled={disabled}
        className={className}
        onChange={date => setSelectedDate(date)}
      />

      {displaySelectedDate && selectedDate && (
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Selected:
          {" "}
          {selectedDate.toLocaleDateString()}
        </div>
      )}
    </div>
  );
};

export default DatePickerDemo;
