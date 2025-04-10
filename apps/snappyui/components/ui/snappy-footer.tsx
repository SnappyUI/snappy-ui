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
    simple: "bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
    detailed: "bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800",
    minimal: "bg-transparent",
    centered: "bg-white dark:bg-gray-900 text-center border-t border-gray-200 dark:border-gray-800",
    modern: "bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800",
    classic: "bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700",
    elegant: "bg-gradient-to-r from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-800",
    dark: "bg-black text-white border-t border-zinc-700",

  };

  // Size styles for padding and spacing
  const sizeStyles = {
    sm: "py-4",
    default: "py-8",
    lg: "py-12",
  };

  // Link styles based on variant
  const linkStyles = {
    simple:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",
    detailed:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",
    minimal:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",
    centered:
      "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",
    modern:
      "text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white no-underline",
    classic:
      "text-zinc-700 hover:text-black dark:text-zinc-200 dark:hover:text-white no-underline",
    elegant:
      "text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-white no-underline",
    dark:
      "text-zinc-300 hover:text-white no-underline",
  };

  // Column title styles based on variant
  const titleStyles = {
    simple: "font-semibold text-gray-900 dark:text-gray-100 mb-4",
    detailed:
      "font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider text-sm",
    minimal: "font-medium text-gray-900 dark:text-gray-100 mb-2",
    centered:
      "font-semibold text-gray-900 dark:text-gray-100 mb-4 uppercase tracking-wider text-sm",
    modern: "text-sm text-zinc-500 mt-6 dark:text-zinc-400",
    classic: "text-sm text-zinc-600 mt-6 dark:text-zinc-300",
    elegant: "text-sm italic text-zinc-700 mt-6 dark:text-zinc-300",
    dark: "text-sm text-zinc-400 mt-8 border-t border-zinc-700 pt-6",
  };

  // Social links container styles
  const socialContainerStyles = {
    simple: "flex space-x-6 mt-4",
    detailed: "flex space-x-4",
    minimal: "flex space-x-4",
    centered: "flex justify-center space-x-6 mt-6",
    dark: "flex space-x-4",
  };

  // Copyright styles
  const copyrightStyles = {
    simple: "text-gray-500 text-sm mt-4 dark:text-gray-400",
    detailed:
      "text-gray-500 text-sm pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 dark:text-gray-400",
    minimal: "text-gray-500 text-sm mt-4 dark:text-gray-400",
    centered: "text-gray-500 text-sm mt-6 dark:text-gray-400",
    dark: "text-gray-400 text-sm pt-8 mt-8 border-t border-gray-800",
  };

  // Render different layouts based on variant
  const renderContent = () => {
    switch (variant) {
      case "simple":
        return (
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                {logo && <div className="mb-4">{logo}</div>}
                <p className={copyrightStyles[variant]}>{copyright}</p>
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
              </div>
              {columns.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
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
                                link.external
                                  ? "noopener noreferrer"
                                  : undefined
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
            {bottomText && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <p className="text-gray-500 text-sm dark:text-gray-400">
                  {bottomText}
                </p>
              </div>
            )}
          </div>
        );

      case "detailed":
        return (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="md:col-span-1 lg:col-span-2">
                {logo && <div className="mb-4">{logo}</div>}
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
              </div>
              {columns.length > 0
                && columns.map((column, index) => (
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
            <div className={copyrightStyles[variant]}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <p>{copyright}</p>
                {bottomText && <p className="mt-2 md:mt-0">{bottomText}</p>}
              </div>
            </div>
          </div>
        );

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

      case "dark":
        return (
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
              <div className="md:col-span-1 lg:col-span-2">
                {logo && <div className="mb-4">{logo}</div>}
                <p className="text-zinc-400 mb-4">
                  {bottomText
                    || "Building amazing digital experiences with cutting-edge technology."}
                </p>
                {socialLinks.length > 0 && (
                  <div className="flex space-x-4 mt-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="text-zinc-300 hover:text-white transition-colors"
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {columns.length > 0
                && columns.map((column, index) => (
                  <div key={index}>
                    {column.title && (
                      <h3 className="uppercase font-semibold text-white mb-4">
                        {column.title}
                      </h3>
                    )}
                    <ul className="space-y-2">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-zinc-300 hover:text-white transition-colors"
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
            <div className="text-zinc-400 text-sm pt-8 mt-8 border-t border-zinc-700">
              <p>{copyright}</p>
            </div>
          </div>
        );

      case "modern":
        return (
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="md:w-1/3">
                {logo && <div className="mb-4">{logo}</div>}
                {socialLinks.length > 0 && (
                  <div className="flex space-x-4 mt-4">
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
              {columns.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
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
            <div className="text-white text-sm pt-8 mt-8 border-t border-gray-800">
              <p>{copyright}</p>
              {bottomText && <p className="mt-2">{bottomText}</p>}
            </div>
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

      case "classic":
        return (
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div className="mb-6 md:mb-0">
                {logo && <div className="mb-4">{logo}</div>}
                {socialLinks.length > 0 && (
                  <div className="flex space-x-4 mt-2">
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
              {columns.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
            <div className="text-gray-700 text-sm pt-8 mt-8 border-t border-gray-200">
              <p>{copyright}</p>
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
