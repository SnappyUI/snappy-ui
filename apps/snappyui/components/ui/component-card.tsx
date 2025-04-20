type Props = {
  variants: string[];
  selected?: string;
  onVariantChange: (variant: string) => void;
  componentName?: string;
  children?: React.ReactNode;
};

export default function ComponentCard({
  variants,
  selected,
  onVariantChange,
  children,
}: Props) {
  return (
    <div
      className="p-2 rounded-xl border transition-all h-[400px] duration-300 flex flex-col justify-center items-center
      bg-white border-gray-200 text-black
      dark:bg-gray-950 dark:border-gray-800 dark:text-white
      hover:border-blue-500/30 overflow-hidden"
    >
      {/* Variant Tabs */}
      <div className="flex gap-4 mb-6 text-sm">
        {variants.map(variant => (
          <button
            type="button"
            key={variant}
            className={`capitalize transition cursor-pointer ${selected === variant
              ? "text-[#1976D2] dark:text-[#42A5F5] underline underline-offset-4"
              : "text-gray-500 dark:text-gray-400"
            }`}
            onClick={() => onVariantChange(variant)}
          >
            {variant}
          </button>
        ))}
      </div>

      {/* Component Display */}
      <div className="flex justify-center items-center min-h-[80px] mb-6 w-full">{children}</div>

      {/* Component Label */}
      {/* <div className="text-sm font-medium">{componentName}</div> */}
    </div>
  );
}
