import React from "react";

import { cn } from "@/lib/utils";

type FooterVariant = "simple" | "detailed" | "minimal" | "centered" | "modern" | "classic" | "elegant" | "dark";
type FooterSize = "sm" | "default" | "lg";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  title?: string;
  links: FooterLink[];
};

type FooterProps = {
  variant?: FooterVariant;
  size?: FooterSize;
  logo?: React.ReactNode;
  copyright?: string;
  columns?: FooterColumn[];
  socialLinks?: FooterLink[];
  bottomText?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Footer({
  variant = "simple",
  size = "default",
  logo,
  copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
  columns = [],
  socialLinks = [],
  bottomText,
  className,
  ...props
}: FooterProps) {
  // Container styles based on variant
  const containerStyles = {
    minimal: "bg-transparent",
    centered: "bg-white dark:bg-gray-900 text-center border-t border-gray-200 dark:border-gray-800",
    elegant: "bg-gradient-to-r from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-800",
    simple: "bg-gray-100 dark:bg-gray-800",
    detailed: "bg-gray-200 dark:bg-gray-700",
    modern: "bg-gray-50 dark:bg-gray-900",
    classic: "bg-gray-300 dark:bg-gray-600",
    dark: "bg-black text-white",
  };

  // Size styles for padding and spacing
  const sizeStyles = {
    sm: "py-4",
    default: "py-8",
    lg: "py-12",
  };

  // Link styles based on variant
  const linkStyles = {
    minimal:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",
    centered:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",
    elegant:
      "text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white no-underline",
  };

  // Column title styles based on variant
  const titleStyles = {
    minimal: "font-medium text-gray-900 dark:text-gray-100 mb-2",
    centered: "font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider text-sm",
    elegant: "text-sm italic text-zinc-700 mt-6 dark:text-zinc-300",
  };

  // Social links container styles
  const socialContainerStyles = {
    minimal: "flex space-x-4",
    centered: "flex justify-center space-x-6 mt-6",
  };

  // Copyright styles
  const copyrightStyles = {
    minimal: "text-gray-500 text-sm mt-4 dark:text-gray-400",
    centered: "text-gray-500 text-sm mt-6 dark:text-gray-400",
  };

  // Render different layouts based on variant
  const renderContent = () => {
    switch (variant) {
      case "minimal":
        return (
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                {logo && <div className="inline-block mr-4">{logo}</div>}
                <span className={copyrightStyles[variant]}>{copyright}</span>
              </div>
              <div className="flex flex-wrap justify-center">
                {columns.length > 0
                  && columns[0]?.links?.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={cn(linkStyles[variant], "mx-2")}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  ))}
                {socialLinks.length > 0 && (
                  <div className={cn(socialContainerStyles[variant], "ml-2")}>
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className={linkStyles[variant]}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "centered":
        return (
          <div className="container mx-auto px-4 text-center">
            {logo && <div className="mb-6">{logo}</div>}
            {columns.length > 0 && (
              <div className="flex flex-wrap justify-center mb-6">
                {columns[0]?.links?.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={cn(linkStyles[variant], "mx-3 my-2")}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            {socialLinks.length > 0 && (
              <div className={socialContainerStyles[variant]}>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={linkStyles[variant]}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
            <p className={copyrightStyles[variant]}>{copyright}</p>
            {bottomText && (
              <p className="text-gray-500 text-sm mt-2 dark:text-gray-400">
                {bottomText}
              </p>
            )}
          </div>
        );

      case "elegant":
        return (
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="lg:w-1/3">
                {logo && <div className="mb-6">{logo}</div>}
                {bottomText && (
                  <p className="text-zinc-700 italic dark:text-zinc-300">{bottomText}</p>
                )}
              </div>
              {columns.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
                  {columns.map((column, index) => (
                    <div key={index}>
                      {column.title && (
                        <h3 className={titleStyles[variant]}>{column.title}</h3>
                      )}
                      <ul className="space-y-2">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className={linkStyles[variant]}
                              target={link.external ? "_blank" : undefined}
                              rel={
                                link.external ? "noopener noreferrer" : undefined
                              }
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="text-gray-500 text-sm pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 dark:text-gray-400">
              <p className="mt-0">{copyright}</p>
              {bottomText && <p className="mt-2">{bottomText}</p>}
            </div>
          </div>
        );
    }
  };

  return (
    <footer
      className={cn(containerStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {renderContent()}
    </footer>
  );
}
