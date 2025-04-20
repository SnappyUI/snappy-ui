"use client";

import { Bell, Check, Settings, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

// Types for notification items
type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "alert" | "success";
};

// Props for the NotificationBell component
type NotificationBellProps = {
  variant: "simple" | "detailed";
  notifications: NotificationItem[];
  onMarkAsRead: (id: string) => void;
  onClearAll: () => void;
  onSettingsClick: () => void;
  className?: string;
};

export default function NotificationBell({
  variant = "simple",
  notifications = [],
  onMarkAsRead,
  onClearAll,
  onSettingsClick,
  className,
}: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle notification icon click
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Get notification type styles
  const getNotificationTypeStyles = (type: NotificationItem["type"]) => {
    switch (type) {
      case "alert":
        return "border-l-4 border-red-500 dark:border-red-400";
      case "success":
        return "border-l-4 border-green-500 dark:border-green-400";
      case "info":
      default:
        return "border-l-4 border-blue-500 dark:border-blue-400";
    }
  };

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {/* Bell Icon with Badge */}
      <button
        onClick={toggleDropdown}
        className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="h-6 w-6 text-gray-700 dark:text-gray-200" />
        {unreadCount > 0
          && (
            <span className="absolute top-0 right-0 h-5 w-5 text-xs flex items-center justify-center bg-red-500 dark:bg-red-600 text-white rounded-full">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
      </button>

      {/* Dropdown */}
      {isOpen
        && (
          <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200 dark:border-gray-700 dark:shadow-lg dark:shadow-gray-900/30">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-medium text-gray-900 dark:text-gray-50">Notifications</h3>
              <div className="flex space-x-2">
                <button
                  onClick={onSettingsClick}
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  title="Notification settings"
                >
                  <Settings className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                </button>
                {notifications.length > 0
                  && (
                    <button
                      onClick={onClearAll}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      title="Clear all notifications"
                    >
                      <X className="h-4 w-4 text-gray-500 dark:text-gray-300" />
                    </button>
                  )}
              </div>
            </div>

            {/* Notification List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0
                ? (
                    <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                      No notifications
                    </div>
                  )
                : (
                    <ul>
                      {notifications.map(notification => (
                        <li
                          key={notification.id}
                          className={cn(
                            "p-4 border-b border-gray-100 dark:border-gray-700/80 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors",
                            !notification.read && "bg-blue-50 dark:bg-blue-900/30",
                            getNotificationTypeStyles(notification.type),
                          )}
                        >
                          {variant === "simple"
                            ? (
                          // Simple variant
                                <div className="flex justify-between">
                                  <div>
                                    <p className="font-medium text-gray-900 dark:text-white">{notification.title}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{notification.time}</p>
                                  </div>
                                  {!notification.read
                                    && (
                                      <button
                                        onClick={() => onMarkAsRead(notification.id)}
                                        className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm transition-colors"
                                      >
                                        Mark read
                                      </button>
                                    )}
                                </div>
                              )
                            : (
                          // Detailed variant
                                <div>
                                  <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-medium text-gray-900 dark:text-white">{notification.title}</h4>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</span>
                                      {!notification.read && (
                                        <button
                                          onClick={() => onMarkAsRead(notification.id)}
                                          className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                          title="Mark as read"
                                        >
                                          <Check className="h-3 w-3 text-blue-500 dark:text-blue-400" />
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-600 dark:text-gray-300">{notification.message}</p>
                                </div>
                              )}
                        </li>
                      ))}
                    </ul>
                  )}
            </div>

            {/* Footer */}
            <div className="p-2 text-center border-t border-gray-200 dark:border-gray-700">
              <button
                className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
    </div>
  );
}
