"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

function DropdownMenuTrigger({ ref, className, variant = "default", ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger> & {
  variant?: "default" | "outline" | "ghost";
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Trigger> | null> }) {
  return (
    <DropdownMenuPrimitive.Trigger
      ref={ref}
      className={cn("flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50", variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4", variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4", variant === "ghost" && "hover:bg-accent hover:text-accent-foreground", className)}
      {...props}
    />
  );
}

DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

function DropdownMenuSubTrigger({ ref, className, inset, children, icon, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean;
  icon?: React.ReactNode;
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger> | null> }) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-colors duration-200", inset && "pl-8", className)}
      {...props}
    >
      {icon && icon}
      {children}
      <ChevronRight className="ml-auto"></ChevronRight>
    </DropdownMenuPrimitive.SubTrigger>
  );
}

DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

function DropdownMenuSubContent({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent> & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.SubContent> | null> }) {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-form-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",
        className,
      )}
      {...props}
    >
    </DropdownMenuPrimitive.SubContent>
  );
}

DropdownMenuSubContent.displayName
    = DropdownMenuPrimitive.SubContent.displayName;

function DropdownMenuContent({ ref, className, sideOffset = 4, size = "default", ...props }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content> & {
  size?: "default" | "large" | "compact";
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Content> | null> }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]",

          size === "default" && "p-2",
          size === "large" && "p-4",
          size === "compact" && "p-0.5",
          className,
        )}

        {...props}
      />

    </DropdownMenuPrimitive.Portal>
  );
}

DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

function DropdownMenuItem({ ref, className, inset, icon, description, iconRight, children, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean;
  icon?: React.ReactNode;
  description?: string;
  iconRight?: React.ReactNode;
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Item> | null> }) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0 group", inset && "pl-8", description && "flex-col items-start py-2", className)}
      {...props}
    >
      <div className="flex w-full items-center gap-2">
        {icon && icon}
        <div className={cn("flex-grow", description && "font-medium")}>
          {children}
        </div>
        {iconRight && (<div className="ml-auto opacity-70 group-hover:opacity-100 transition-opacity">{iconRight}</div>)}
      </div>
      {description && (<p className="text-xs text-muted-foreground line-clamp-1">{description}</p>)}
    </DropdownMenuPrimitive.Item>
  );
}
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

function DropdownMenuCheckboxItem({ ref, className, children, checked, description, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem> & {
  description?: string;
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem> | null> }) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      ref={ref}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        description && "flex-col items-start py-2",
        className,
      )}
      checked={checked}
      {...props}
    >
      <div className="flex items-center">
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <Check className="h-4 w-4" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        <span>{children}</span>
      </div>
      <div className="flex flex-col">
        {description && (
          <span className="text-xs text-muted-foreground mt-0.5">{description}</span>
        )}
      </div>
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

function DropdownMenuRadioItem({ ref, className, children, description, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem> & {
  description?: string;
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.RadioItem> | null> }) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", description && "flex-col items-start py-2", className)}
      {...props}
    >

      <div className="flex items-center">
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <DropdownMenuPrimitive.ItemIndicator>
            <Circle className="h-2 w-2 fill-current" />
          </DropdownMenuPrimitive.ItemIndicator>
        </span>
        <div className="flex flex-col">
          <span>{children}</span>
          {description && (
            <span className="text-xm text-muted-foreground mt-0.5">{description}</span>
          )}
        </div>

      </div>
    </DropdownMenuPrimitive.RadioItem>
  );
}

DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

function DropdownMenuLabel({ ref, className, inset, badge, children, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean;
  badge?: React.ReactNode;
} & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Label> | null> }) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn("px-2 py-1.5 text-sm font-semibold flex items-center justify-between", inset && "pl-8", className)}
      {...props}
    >
      <span>{children}</span>
      {badge && <span className="bg-muted px-1.5 py-0.5 rounded-sm text-xs font-normal">{badge}</span>}
    </DropdownMenuPrimitive.Label>
  );
}

DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

function DropdownMenuSeparator({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator> & { ref?: React.RefObject<React.ElementRef<typeof DropdownMenuPrimitive.Separator> | null> }) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  );
}
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function DropdownMenuShortcut({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props}></span>
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// New component for action buttons in dropdown
function DropdownMenuAction({ ref, className, variant = "default", children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "link";
} & { ref?: React.RefObject<HTMLButtonElement | null> }) {
  return (
    <button
      ref={ref}
      className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 w-full", variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90 h-8 px-3", variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3", variant === "ghost" && "hover:bg-accent hover:text-accent-foreground h-8 px-3", variant === "link" && "text-primary underline-offset-4 hover:underline", className)}
      {...props}
    >
      {children}
    </button>
  );
}

DropdownMenuAction.displayName = "DropdownMenuAction";

// New component for Header
function DropdownMenuHeader({ ref, className, title, description, icon, ...props }: React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description?: string;
  icon?: React.ReactNode;
} & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col px-3 py-2 border-b", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon && <div className="text-primary">{icon}</div>}
        <div className="font-medium text-sm">{title}</div>
      </div>
      {description && (<p className="text-xs text-muted-foreground mt-1">{description}</p>)}
    </div>
  );
}
DropdownMenuHeader.displayName = "DropdownMenuHeader";

function DropdownMenuFooter({ ref, className, children, ...props }: React.HTMLAttributes<HTMLDivElement> & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-between p-2 pt-3 mt-1 border-t gap-2 text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}
DropdownMenuFooter.displayName = "DropdownMenuFooter";

export {
  DropdownMenu,
  DropdownMenuAction,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuFooter,
  DropdownMenuGroup,
  DropdownMenuHeader,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
