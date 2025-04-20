"use client";
import type { RefObject } from "react";

import React, { useRef, useState } from "react";

import FloatingDots from "./ui/snappy-floating-dots";
import StickyNote from "./ui/snappy-sticky-note";

// Define StickyNoteColor type to match the expected color values
type StickyNoteColor = "yellow" | "blue" | "purple" | "green" | "pink";

export default function Playground() {
  // Correctly declare constraintsRef at the top level of the component
  // Also updated the type annotation for better clarity.
  const constraintsRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  // Ensure initial notes use colors defined in StickyNote's colorHexMap
  const [notes, setNotes] = useState([
    { id: 1, content: "Welcome to Snappy Ui 💖", color: "yellow" as StickyNoteColor, position: { x: -150, y: 150 }, rotation: -2 },
    { id: 2, content: "Keep components simple and reusable", color: "blue" as StickyNoteColor, position: { x: 170, y: 220 }, rotation: 3 },
    { id: 3, content: "Customize colors, size, and animations", color: "purple" as StickyNoteColor, position: { x: 150, y: 50 }, rotation: -1 },
    { id: 4, content: "Use subtle shadows and rounded corners", color: "green" as StickyNoteColor, position: { x: 350, y: 320 }, rotation: 1 },
    { id: 5, content: "Test overlap, stacking, and z-index", color: "pink" as StickyNoteColor, position: { x: -440, y: 274 }, rotation: -3 },
  ]);

  // Handle content changes
  const handleContentChange = (id: string | number, content: string) => {
    console.log(`Note ${id} content: ${content}`);
    // Update the content for the note with the given id
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, content } : note,
      ),
    );
  };

  // Handle position changes
  const handlePositionChange = (id: string | number, position: { x: number; y: number }) => {
    console.log(`Note ${id} position:`, position);
    // Update the position for the note with the given id
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, position } : note,
      ),
    );
  };

  // Handle color selection
  // The color type should match the keys of colorHexMap in StickyNote
  const handleColorChange = (id: string | number, color: StickyNoteColor) => {
    console.log(`Note ${id} color: ${color}`);
    // Update the color for the note with the given id
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === id ? { ...note, color } : note,
      ),
    );
  };

  // Handle note deletion
  const handleDelete = (id: string | number) => {
    console.log(`Delete note ${id}`);
    // Filter out the note with the given id
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
  };

  return (
    <section className="py-16 mb-3 min-w-screen md:py-20 px-6 md:px-16 max-w-7xl mx-auto relative overflow-hidden w-screen h-screen">
      {/* Right glow effect */}
      <div className="absolute top-16 -right-100 w-92 h-92 bg-blue-400/20 dark:bg-blue-400/30 rounded-full blur-[108px] -translate-x-1/2 z-10 pointer-events-none"></div>

      {/* Floating dots background */}
      <FloatingDots />

      {/* Content container with relative positioning */}
      <div className="relative z-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-4 animate-slide-up text-[#1976D2] dark:text-[#42A5F5]">
          Experiment with StickyNotes
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-center mb-16 max-w-xl mx-auto text-md md:text-lg">
          Play around with the features and make it your own.
        </p>

        {/* Feature Cards */}
        <div ref={constraintsRef} className="flex border-1 rounded-4xl h-[550px] justify-center m-10 p-3 overflow-hidden">

          {notes.map(note => (
            <StickyNote
              dragConstraintsRef={constraintsRef as RefObject<Element>}
              key={note.id}
              id={note.id}
              initialContent={note.content}
              initialColor={note.color} // Now type should match
              initialPosition={note.position}
              initialRotation={note.rotation}
              onContentChange={handleContentChange}
              onPositionChange={handlePositionChange}
              onColorChange={handleColorChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
