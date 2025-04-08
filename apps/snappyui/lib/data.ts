import React from "react";

const carouselItems = [
  {
    id: 1,
    content: React.createElement(
      "div",
      {
        className:
          "bg-blue-500 text-white w-full h-full flex items-center justify-center",
      },
      React.createElement(
        "div",
        { className: "text-center p-8" },
        React.createElement(
          "h2",
          { className: "text-3xl font-bold mb-4" },
          "First Slide",
        ),
        React.createElement(
          "p",
          { className: "text-xl" },
          "This is the first carousel slide",
        ),
      ),
    ),
  },
  {
    id: 2,
    content: React.createElement(
      "div",
      {
        className:
          "bg-green-500 text-white w-full h-full flex items-center justify-center",
      },
      React.createElement(
        "div",
        { className: "text-center p-8" },
        React.createElement(
          "h2",
          { className: "text-3xl font-bold mb-4" },
          "Second Slide",
        ),
        React.createElement(
          "p",
          { className: "text-xl" },
          "This is the second carousel slide",
        ),
      ),
    ),
  },
  {
    id: 3,
    content: React.createElement(
      "div",
      {
        className:
          "bg-purple-500 text-white w-full h-full flex items-center justify-center",
      },
      React.createElement(
        "div",
        { className: "text-center p-8" },
        React.createElement(
          "h2",
          { className: "text-3xl font-bold mb-4" },
          "Third Slide",
        ),
        React.createElement(
          "p",
          { className: "text-xl" },
          "This is the third carousel slide",
        ),
      ),
    ),
  },
  {
    id: 4,
    content: React.createElement(
      "div",
      {
        className:
          "bg-red-500 text-white w-full h-full flex items-center justify-center",
      },
      React.createElement(
        "div",
        { className: "text-center p-8" },
        React.createElement(
          "h2",
          { className: "text-3xl font-bold mb-4" },
          "Fourth Slide",
        ),
        React.createElement(
          "p",
          { className: "text-xl" },
          "This is the fourth carousel slide",
        ),
      ),
    ),
  },
];

export default carouselItems;
