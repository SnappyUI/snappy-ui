"use client";
import { Check, X } from "lucide-react";
import React from "React";

import { cn } from "@/lib/utils";

const PriceTable: React.FC<{ children: React.ReactNode; className?: string; mostPopular?: boolean }> = ({ children, className, mostPopular }) => (
  <div className={cn(
    "relative  border-2 dark:border-gray-900 border-black rounded-2xl w-full sm:w-[280px] md:w-[300px] h-max p-4 md:p-5 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-lg",
    mostPopular && "border-black dark:gray-900 scale-110 hover:scale-112 py-6 sm:py-8 z-10",
    className,
  )}
  >
    {mostPopular && <label className="absolute -top-[18px] left-1/2 -translate-x-1/2 bg-yellow-300 px-3 sm:px-5 py-1 sm:py-1.5 rounded-3xl text-[0.7rem] sm:text-[0.8rem] font-extrabold text-black dark:text-black">Most Popular</label>}
    {children}
  </div>
);

const CardHeader: React.FC<{ title: string; className?: string }> = ({ title, className }) => {
  return <h2 className={cn("text-xl sm:text-2xl text-black dark:text-white mb-3 sm:mb-3.5 text-center", className)}>{title}</h2>;
};

const Price: React.FC<{ className?: string; price: string; timeFrame: string }> = ({ className, price, timeFrame }) => {
  return (
    <div className={cn("rounded-md dark:bg-zinc-800 bg-gray-300 py-4 sm:p-4 flex flex-col items-center mb-4 sm:mb-6", className)}>
      <div className="text-black dark:text-white text-[2rem] sm:text-[2.8rem] font-bold">{price}</div>
      <div className="text-zinc-500 text-sm sm:text-base uppercase mt-3">{timeFrame}</div>
    </div>
  );
};

const Features: React.FC<{ className?: string; text: string; disable?: boolean }> = ({ className, text, disable }) => {
  return (
    <div className={cn(
      "flex gap-2 text-sm sm:text-base dark:text-zinc-200 text-black mb-4 items-center  sm:mb-6",
      disable && "text-gray-500 dark:text-zinc-500",
      className,
    )}
    >
      {disable ? <X size={18} /> : <Check size={18} />}
      {" "}
      {text}
    </div>
  );
};

const PurchaseButton: React.FC<{ onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; className?: string }> = ({ onClick, className }) => {
  return (
    <button
      className={cn(
        "p-2 sm:p-[10px] rounded-[10px] border-2 border-black dark:border-white bg-transparent text-black dark:text-white font-bold sm:font-extrabold w-full text-sm sm:text-base transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
        className,
      )}
      onClick={onClick}
    >
      Purchase
    </button>
  );
};

export { CardHeader, Features, Price, PriceTable, PurchaseButton };
