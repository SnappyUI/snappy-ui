"use client";

import React, { useState } from "react";

import NotificationBell from "../ui/snappy-bell";

export default function BellDemo() {
  const [notifications, setNotifications] = useState<{
    id: string;
    title: string;
    message: string;
    time: string;
    read: boolean;
    type: "info" | "alert" | "success";
  }[]>([
    {
      id: "1",
      title: "New Message",
      message: "You received a new message from John.",
      time: "2 mins ago",
      read: false,
      type: "info",
    },
    {
      id: "2",
      title: "System Alert",
      message: "Scheduled maintenance tonight at 12:00 AM.",
      time: "10 mins ago",
      read: false,
      type: "alert",
    },
    {
      id: "3",
      title: "Payment Success",
      message: "Your payment has been processed.",
      time: "1 hour ago",
      read: true,
      type: "success",
    },
  ]);

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif,
      ),
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const openSettings = () => {
    // alert("Settings clicked!");
  };

  return (
    <div className="flex relative items-end justify-end">
      <NotificationBell
        variant="detailed"
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onClearAll={clearAll}
        onSettingsClick={openSettings}
      />
    </div>

  );
};
