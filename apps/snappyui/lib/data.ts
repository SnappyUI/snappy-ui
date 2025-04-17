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

export const avatarData = [
  { name: "Ajay Patel", src: "https://avatars.githubusercontent.com/u/6430569?v=4" },
  { name: "Jay Kadlag", src: "https://avatars.githubusercontent.com/u/121807304?v=4" },
  { name: "Ayush Bhagat", src: "https://avatars.githubusercontent.com/u/103896902?s=400&u=7cfa9637b46b0dcffd0902a099c86365151051e4&v=4" },
  { name: "Ajay Panigrahi", src: "https://avatars.githubusercontent.com/u/168801266?v=4" },
  { name: "Ankit Raj", src: "https://avatars.githubusercontent.com/u/131615178?v=4" },
  { name: "Jatin Verma", src: "https://avatars.githubusercontent.com/u/202832380?v=4" },
  { name: "Aditya Raj", src: "https://avatars.githubusercontent.com/u/83577693?v=4" },
];

export default carouselItems;
