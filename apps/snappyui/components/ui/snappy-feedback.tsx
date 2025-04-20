"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";

export type FeedbackProps = {
  buttonLabel?: string;
  placeholder?: string;
  successTitle?: string;
  successDescription?: string;
  onFeedbackSubmit?: () => void;
};

export function Feedback({
  buttonLabel = "Feedback",
  placeholder = "Feedback",
  successTitle = "Feedback received!",
  successDescription = "Thanks for helping me improve this.",
  onFeedbackSubmit,
}: FeedbackProps) {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [feedback, setFeedback] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useOnClickOutside(ref as React.RefObject<HTMLElement>, () => {
    if (formState !== "success")
      setOpen(false);
  });

  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
      if (onFeedbackSubmit)
        onFeedbackSubmit();
    }, 1500);
    setTimeout(() => {
      setOpen(false);
    }, 3200);
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")
        setOpen(false);
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter" && open && formState === "idle")
        submit();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, formState]);

  return (
    <div className="h-[300px] w-full flex justify-center items-center relative">
      <div className="relative">
        <motion.button
          initial={{ opacity: 1 }}
          type="button"
          onClick={() => {
            setOpen(true);
            setFormState("idle");
            setFeedback("");
          }}
          ref={buttonRef}
          className={`flex h-9 items-center border border-gray-200 text-white dark:border-zinc-700 bg-[#292b2b] dark:bg-zinc-900 px-3 text-sm font-medium rounded-md shadow-sm transition-all ${
            open ? "z-10 opacity-100" : "z-0 opacity-100"
          }`}
        >
          <span>{buttonLabel}</span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              ref={ref}
              className="bg-white z-10 dark:bg-zinc-800 w-[364px] h-[192px] shadow-xl rounded-xl overflow-hidden flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <AnimatePresence mode="wait">
                {formState === "success"
                  ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center justify-center text-blue-500 dark:text-blue-400"
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="12" fill="currentColor" fillOpacity="0.16" />
                          <path
                            d="M12.1334 16.9667L15.0334 19.8667L19.8667 13.1"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">{successTitle}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{successDescription}</p>
                      </motion.div>
                    )
                  : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (feedback.trim())
                            submit();
                        }}
                        className="flex flex-col w-full h-full"
                      >
                        <div className="relative flex-1">
                          <textarea
                            autoFocus
                            required
                            value={feedback}
                            onChange={e => setFeedback(e.target.value)}
                            className="w-full h-full resize-none p-3 text-sm bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none border-b border-gray-200 dark:border-zinc-700"
                          />
                          <span
                            className={`absolute top-3 left-3 text-sm transition-opacity ${
                              feedback ? "opacity-0" : "opacity-100 text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {placeholder}
                          </span>
                        </div>
                        <div className="h-12 px-3 flex items-center justify-end">
                          <button
                            type="submit"
                            className="flex items-center justify-center h-8 px-6 rounded-full text-white text-sm font-medium bg-blue-500 hover:bg-blue-600"
                          >
                            <AnimatePresence mode="wait" initial={false}>
                              <motion.span
                                key={formState}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-2"
                              >
                                {formState === "loading"
                                  ? (
                                      <Spinner color="white" size={16} />
                                    )
                                  : (
                                      <span>Send</span>
                                    )}
                              </motion.span>
                            </AnimatePresence>
                          </button>
                        </div>
                      </motion.form>
                    )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Spinner({ color, size = 16 }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" strokeOpacity="0.3" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
