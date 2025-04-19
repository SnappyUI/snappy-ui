"use client";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ProfileCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "bordered" | "minimal";
  hoverEffect?: boolean;
};

type ProfileActionButtonProps = {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  icon?: ReactNode;
};

export function ProfileCard({
  children,
  className,
  variant = "default",
  hoverEffect = false,
}: ProfileCardProps) {
  const variantStyles = {
    default: "bg-white border dark:border-0  rounded-xl shadow-sm dark:bg-black ",
    elevated: "bg-white border dark:border-0 rounded-xl shadow-md dark:bg-black ",
    bordered: "bg-white  border-2 border-gray-200 rounded-xl dark:bg-black dark:border-gray-600",
    minimal: "bg-gray-50 border dark:border-0 rounded-xl dark:bg-black",
  };

  const hoverStyles = hoverEffect
    ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    : "";

  return (
    <div className={cn(
      "w-full max-w-sm",
      variantStyles[variant],
      hoverStyles,
      className,
    )}
    >
      {children}
    </div>
  );
}

export function ProfileContent({ children, className, centered = true }: ProfileCardProps & { centered?: boolean }) {
  return (
    <div className={cn(
      "px-4 pb-8 pt-6",
      centered ? "flex flex-col items-center text-center" : "",
      className,
    )}
    >
      {children}
    </div>
  );
}

export function ProfileImage({
  className,
  imageUrl,
  imageAlt,
  size = "medium",
  bordered = true,
}: {
  className?: string;
  imageUrl: string;
  imageAlt: string;
  size?: "small" | "medium" | "large";
  bordered?: boolean;
}) {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const borderStyle = bordered ? "ring-4 ring-gray-100 dark:ring-gray-700" : "";

  return (
    <div className="relative">
      <img
        className={cn(
          sizeClasses[size],
          "mb-3 rounded-full shadow-lg object-cover",
          borderStyle,
          className,
        )}
        src={imageUrl}
        alt={imageAlt}
      />
    </div>
  );
}

export function ProfileBadge({
  className,
  icon,
  color = "blue",
}: {
  className?: string;
  icon: ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "purple";
}) {
  const colorClasses = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
    yellow: "bg-yellow-500 text-white",
    purple: "bg-purple-500 text-white",
  };

  return (
    <div className={cn(
      "absolute -bottom-1 -right-1 p-1 rounded-full",
      colorClasses[color],
      className,
    )}
    >
      {icon}
    </div>
  );
}

export function ProfileName({ className, name }: { className?: string; name: string }) {
  return <h5 className={cn("mb-1 text-xl font-medium text-gray-900 dark:text-white", className)}>{name}</h5>;
}

export function ProfileDesignation({ className, designation }: { className?: string; designation: string }) {
  return <span className={cn("text-sm text-gray-500 dark:text-gray-400", className)}>{designation}</span>;
}

export function ProfileBio({ className, bio }: { className?: string; bio: string }) {
  return <p className={cn("mt-3 text-sm text-gray-600 dark:text-gray-300", className)}>{bio}</p>;
}

export function ProfileStats({
  className,
  stats,
}: {
  className?: string;
  stats: { label: string; value: string | number }[];
}) {
  return (
    <div className={cn("flex justify-center gap-4 mt-4", className)}>
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="font-semibold text-gray-900 dark:text-white">{stat.value}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export function ProfileTag({
  className,
  text,
  color = "default",
}: {
  className?: string;
  text: string;
  color?: "default" | "blue" | "green" | "red" | "yellow" | "purple";
}) {
  const colorClasses = {
    default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  };

  return (
    <span className={cn(
      "px-2 py-1 text-xs font-medium rounded-full",
      colorClasses[color],
      className,
    )}
    >
      {text}
    </span>
  );
}

export function ProfileTags({
  className,
  tags,
}: {
  className?: string;
  tags: { text: string; color?: "default" | "blue" | "green" | "red" | "yellow" | "purple" }[];
}) {
  return (
    <div className={cn("flex flex-wrap gap-2 mt-3", className)}>
      {tags.map((tag, index) => (
        <ProfileTag key={index} text={tag.text} color={tag.color} />
      ))}
    </div>
  );
}

export function ProfileSocialLink({
  className,
  icon,
  href,
  label,
}: {
  className?: string;
  icon: ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        className,
      )}
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export function ProfileSocial({
  className,
  links,
}: {
  className?: string;
  links: { icon: ReactNode; href: string; label: string }[];
}) {
  return (
    <div className={cn("flex space-x-1 mt-4", className)}>
      {links.map((link, index) => (
        <ProfileSocialLink
          key={index}
          icon={link.icon}
          href={link.href}
          label={link.label}
        />
      ))}
    </div>
  );
}

export function ProfileDivider({ className }: { className?: string }) {
  return <div className={cn("w-full border-t border-gray-200 my-4 dark:border-gray-700", className)} />;
}

export function ProfileFooter({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("flex flex-wrap justify-center gap-2 mt-6", className)}>{children}</div>;
}

export function ProfileActionButton({
  text,
  onClick,
  className,
  variant = "primary",
  icon,
}: ProfileActionButtonProps) {
  const variantStyles = {
    primary: "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    secondary: "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
    outline: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
  };

  return (
    <button
      className={cn(
        "py-2 px-4 text-sm font-medium rounded-lg focus:outline-none focus:ring-4 transition-colors",
        "flex items-center justify-center",
        variantStyles[variant],
        className,
      )}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
  );
}

// New additional component: Contact Info
export function ProfileContactInfo({
  className,
  email,
  phone,
  location,
}: {
  className?: string;
  email?: string;
  phone?: string;
  location?: string;
}) {
  return (
    <div className={cn("space-y-2 mt-4 text-sm", className)}>
      {email && (
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="mr-2">Email:</span>
          <span>{email}</span>
        </div>
      )}
      {phone && (
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="mr-2">Phone:</span>
          <span>{phone}</span>
        </div>
      )}
      {location && (
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <span className="mr-2">Location:</span>
          <span>{location}</span>
        </div>
      )}
    </div>
  );
}

// Progress bar component for skills
export function ProfileSkill({
  name,
  level,
  className,
}: {
  name: string;
  level: number;
  className?: string;
}) {
  // Ensure level is between 0 and 100
  const normalizedLevel = Math.max(0, Math.min(100, level));

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {normalizedLevel}
          %
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2 rounded-full dark:bg-blue-500"
          style={{ width: `${normalizedLevel}%` }}
        />
      </div>
    </div>
  );
}

export function ProfileSkills({
  skills,
  className,
}: {
  skills: { name: string; level: number }[];
  className?: string;
}) {
  return (
    <div className={cn("w-full space-y-3 mt-4", className)}>
      {skills.map((skill, index) => (
        <ProfileSkill
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}
    </div>
  );
}
