import { Check, Copy } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import Button from "./snappy-button";

type ClipboardButtonProps = {
  value: string;
  onCopied?: () => void;
  className?: string;
  variant?: "default" | "outline" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ClipboardButton({ value, onCopied, className, variant = "outline", ...props }: ClipboardButtonProps & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      onCopied?.();
    }
    catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <Button
      variant={variant}
      size="sm"
      onClick={handleClick}
      className={cn(
        "transition-all duration-200",
        copied && "bg-green-500/10 text-green-500 hover:bg-green-500/20 dark:bg-green-500/20",
        className,
      )}
      {...props}
    >

      {copied
        ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          )
        : (
            <Copy className="h-4 w-4" aria-hidden="true" />
          )}
      <span className="sr-only">{copied ? "Copied!" : "Copy to clipboard"}</span>
      {" "}

    </Button>
  );
}

ClipboardButton.displayName = "ClipboardButton";

type ClipboardCopyProps = {
  value: string;
  preview?: boolean;
  previewLength?: number;
  className?: string;
  onCopied?: () => void;
};

export function ClipboardCopy({ ref, value, preview = true, previewLength = 40, className, onCopied }: ClipboardCopyProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  const displayText = preview && value.length > previewLength
    ? `${value.substring(0, previewLength)}...`
    : value;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-2 rounded-md border bg-background p-2 text-sm",
        className,
      )}
    >

      <pre className="flex-1 overflow-x-auto whitespace-pre-wrap break-all py-1 px-2">
        <code>{displayText}</code>
      </pre>

      <ClipboardButton
        value={value}
        onCopied={onCopied}
        className="shrink-0"
        aria-label="Copy full text to clipboard"
      />
    </div>
  );
}

ClipboardCopy.displayName = "ClipboardCopy";
