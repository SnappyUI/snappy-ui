"use client";

import type { RefObject } from "react";

import React, { useRef, useState } from "react";

import StickyNote from "@/components/ui/snappy-sticky-note"; // Adjust path if necessary

// Import the type definition for colors from StickyNote
// This assumes StickyNote exports colorHexMap or its keys type
// If StickyNote doesn't export it, you might need to redefine it here
// matching the StickyNote's definition or ideally export it from StickyNote.
// For now, assuming StickyNote's color keys are 'yellow' | 'blue' | 'green' | 'pink' | 'purple'
type StickyNoteColor = "yellow" | "blue" | "green" | "pink" | "purple";

export default function Stickynote() {
  // Correctly declare constraintsRef at the top level of the component
  // Also updated the type annotation for better clarity.
  const constraintsRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

  // Ensure initial notes use colors defined in StickyNote's colorHexMap
  const [notes, setNotes] = useState([
    { id: 1, content: "Hello World!", color: "yellow" as StickyNoteColor, position: { x: 40, y: 60 }, rotation: -2 },
    { id: 2, content: "React is Awesome!", color: "blue" as StickyNoteColor, position: { x: 180, y: 120 }, rotation: 3 },
    { id: 3, content: "Keep Coding!", color: "purple" as StickyNoteColor, position: { x: 320, y: 80 }, rotation: -1 },
    { id: 4, content: "Breaking Bad: 9.5", color: "green" as StickyNoteColor, position: { x: 100, y: 220 }, rotation: 1 },
    { id: 5, content: "Fight Club: 8.8", color: "pink" as StickyNoteColor, position: { x: 280, y: 240 }, rotation: -3 },
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
    <div ref={constraintsRef} className="relative w-[750px] h-[500px] bg-[#f5f5f5] dark:bg-[#110f0f] overflow-hidden">
      {notes.map(note => (
        <StickyNote
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
      {/* Add button or interaction to create new notes */}
    </div>
  );
}
