import { Check, Copy } from "lucide-react"; // Icons
import React from "react";

import { cn } from "@/lib/utils"; // Utility for merging class names

import Button from "./snappy-button"; // Assuming this is your Button component

// --- ClipboardButton Component ---

type ClipboardButtonProps = {
  value: string; // The text value to copy
  onCopied?: () => void; // Optional callback when copy is successful
  className?: string; // Optional additional class names
  variant?: "default" | "outline" | "ghost"; // Button style variant
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * A button component that copies a given text value to the clipboard when clicked.
 * Shows a checkmark briefly after successful copy.
 */
export function ClipboardButton({ value, onCopied, className, variant = "outline", ...props }: ClipboardButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  const [copied, setCopied] = React.useState(false);

  // Reset the copied state after a short delay
  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount or if copied changes
    }
  }, [copied]);

  // Handle the button click to copy text
  const handleClick = async () => {
    // Prevent default button behavior if necessary, and stop propagation
    // event.preventDefault();
    // event.stopPropagation();

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.(); // Call the optional callback
    }
    catch (error) {
      console.error("Failed to copy text to clipboard:", error);
      // Handle error state if needed
    }
  };

  return (
    <Button
      variant={variant}
      size="sm" // Use a small size for the icon button
      onClick={handleClick}
      className={cn(
        "transition-all duration-200", // Smooth transition for style changes
        copied && "bg-green-500/10 text-green-500 hover:bg-green-500/20 dark:bg-green-500/20", // Style when copied
        className, // Apply additional classes
      )}
      {...props} // Spread any other button props
    >
      {/* Show Check icon when copied, Copy icon otherwise */}
      {copied
        ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          )
        : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
      <span className="sr-only">{copied ? "Copied!" : "Copy to clipboard"}</span>
      {" "}
      {/* Accessibility improvement */}
    </Button>
  );
}

ClipboardButton.displayName = "ClipboardButton";

// --- ClipboardCopy Component ---

type ClipboardCopyProps = {
  value: string; // The full text value to be copied
  preview?: boolean; // Whether to show a truncated preview
  previewLength?: number; // Max length for the preview (default 40)
  className?: string; // Optional additional class names for the container div
  onCopied?: () => void; // Optional callback when copy is successful (passed to ClipboardButton)
};

/**
 * A component that displays text (optionally truncated) next to a button
 * that copies the full text value to the clipboard.
 */
export function ClipboardCopy({ ref, value, preview = true, previewLength = 40, className, onCopied }: ClipboardCopyProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  // Determine the text to display based on preview settings
  const displayText = preview && value.length > previewLength
    ? `${value.substring(0, previewLength)}...` // Truncate if needed
    : value; // Show full value

  return (
    <div
      ref={ref} // Forward the ref to the main div element
      className={cn(
        "flex items-center gap-2 rounded-md border bg-background p-2 text-sm", // Base styles
        className, // Apply additional classes
      )}
    >
      {/* Display the text, allowing horizontal scroll if it overflows */}
      <pre className="flex-1 overflow-x-auto whitespace-pre-wrap break-all py-1 px-2">
        <code>{displayText}</code>
      </pre>
      {/* Use the ClipboardButton defined above */}
      <ClipboardButton
        value={value} // Pass the full value to be copied
        onCopied={onCopied} // Pass the callback down
        className="shrink-0" // Prevent the button from shrinking
        aria-label="Copy full text to clipboard" // More specific aria-label
      />
    </div>
  );
}

ClipboardCopy.displayName = "ClipboardCopy";
