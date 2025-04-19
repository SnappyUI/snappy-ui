"use client";

import clsx from "clsx";

export type AvatarType = {
  name: string;
  src: string;
};

type AvatarProps = AvatarType & {
  width?: number;
  height?: number;
  stacked?: boolean;
};

export default function Avatar({
  name,
  src,
  width = 56,
  height = 56,
  stacked = false,
}: AvatarProps) {
  return (
    <div
      className={clsx(
        "group relative transition-transform duration-300",
        stacked && "-mr-4 hover:z-30 hover:scale-110",
      )}
    >
      <div className="group relative">
        <img
          src={src}
          alt={name}
          width={width}
          height={height}
          style={{ width, height }}
          className={clsx(
            "rounded-full border-2 border-bg object-cover transition duration-300",
            stacked && "group-hover:z-30 group-hover:scale-110",
          )}
        />
        <div className="absolute text-md bottom-full mb-2 left-1/2 -translate-x-1/2 scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 bg-white dark:bg-black text-black dark:text-white rounded px-2 py-1 whitespace-nowrap z-40">
          {name}
        </div>
      </div>
    </div>
  );
}
