import { motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

type StickyNoteProps = {
  id: string | number;
  initialContent?: string;
  initialColor?: keyof typeof colorHexMap;
  initialPosition?: { x: number; y: number };
  initialRotation?: number;
  editable?: boolean;
  onContentChange?: (id: string | number, content: string) => void;
  onPositionChange?: (id: string | number, position: { x: number; y: number }) => void;
  onColorChange?: (id: string | number, color: keyof typeof colorHexMap) => void;
  onDelete?: (id: string | number) => void;
  dragConstraintsRef?: React.RefObject<Element>;
  className?: string;
};

const colorHexMap = {
  yellow: "#fef08a",
  blue: "#bfdbfe",
  green: "#bbf7d0",
  pink: "#fbcfe8",
  purple: "#e9d5ff",
};

const colorHoverHexMap = {
  yellow: "#fde047",
  blue: "#93c5fd",
  green: "#86efac",
  pink: "#f9a8d4",
  purple: "#d8b4fe",
};

const StickyNote: React.FC<StickyNoteProps> = ({
  id,
  initialContent = "",
  initialColor = "yellow",
  initialPosition = { x: Math.random() * 200, y: Math.random() * 200 },
  initialRotation = Math.random() * 6 - 3,
  editable = true,
  onContentChange,
  onPositionChange,
  onColorChange,
  onDelete,
  dragConstraintsRef,
  className = "",
}) => {
  const [content, setContent] = useState(initialContent);
  const [color, setColor] = useState<keyof typeof colorHexMap>(initialColor);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const x = useMotionValue(initialPosition.x);
  const y = useMotionValue(initialPosition.y);
  const rotate = useMotionValue(initialRotation);

  useEffect(() => {
    if (isEditing && textAreaRef.current) {
      textAreaRef.current.focus();
      textAreaRef.current.select();
    }
  }, [isEditing]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onContentChange?.(id, content);
  };

  const handleColorChange = (newColor: keyof typeof colorHexMap) => {
    setColor(newColor);
    onColorChange?.(id, newColor);
  };

  const handleDragStart = () => {
    setIsDragging(true);
    rotate.set(initialRotation + Math.random() * 4 - 2);
  };
  const handleDragEnd = () => {
    setIsDragging(false);
    onPositionChange?.(id, { x: x.get(), y: y.get() });
    rotate.set(initialRotation + Math.random() * 2 - 1);
  };

  const handleClickToEdit = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest(".color-picker-button") || target.closest(".delete-button"))
      return;

    if (editable && !isEditing && !isDragging) {
      e.stopPropagation();
      setIsEditing(true);
    }
  };

  const currentBgColor
    = isHovered && !isEditing && !isDragging ? colorHoverHexMap[color] : colorHexMap[color];

  return (
    <motion.div
      drag
      dragConstraints={dragConstraintsRef}
      dragElastic={0.12}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        x,
        y,
        rotate,
        position: "absolute",
        cursor: isEditing ? "text" : isDragging ? "grabbing" : "grab",
      }}
      initial={{ opacity: 0, scale: 0.9, rotate: initialRotation }}
      animate={{
        opacity: 1,
        scale: isEditing ? 1.02 : isDragging ? 1.08 : 1,
        backgroundColor: currentBgColor,
        zIndex: isDragging ? 100 : isEditing ? 90 : isHovered ? 50 : 10,
        transition: { type: "spring", stiffness: 160, damping: 22 },
      }}
      layout
      className={`rounded-lg border shadow-md max-w-xs w-64 min-h-[150px] overflow-hidden ${className}`}
      onClickCapture={handleClickToEdit}
    >
      {/* Text or TextArea */}
      <div className="p-3 flex-grow text-gray-800">
        {editable && isEditing
          ? (
              <textarea
                ref={textAreaRef}
                className="w-full h-full bg-transparent resize-none focus:outline-none font-serif text-sm leading-relaxed"
                style={{ minHeight: "100px" }}
                value={content}
                onChange={handleContentChange}
                onBlur={handleBlur}
              />
            )
          : (
              <div
                className="whitespace-pre-wrap font-serif text-sm leading-relaxed cursor-text min-h-[100px]"
                onClick={() => editable && setIsEditing(true)}
              >
                {content || (editable ? "Click to edit..." : "")}
              </div>
            )}
      </div>

      {/* Color Picker + Delete */}
      {editable && (
        <motion.div
          className="absolute bottom-2 right-2 flex items-center space-x-1.5 p-1 bg-white/30 backdrop-blur-sm rounded-full shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: (isHovered || isEditing) && !isDragging ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {Object.keys(colorHexMap).map(colorOption => (
            <motion.button
              key={colorOption}
              className="color-picker-button w-4 h-4 rounded-full border border-black/20 focus:outline-none"
              style={{ backgroundColor: colorHexMap[colorOption as keyof typeof colorHexMap] }}
              onClick={(e) => {
                e.stopPropagation();
                handleColorChange(colorOption as keyof typeof colorHexMap);
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
          {/* Delete Button */}
          <motion.button
            onClick={() => onDelete?.(id)}
            className="delete-button w-5 h-5 ml-1 rounded-full bg-red-400 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            ×
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StickyNote;
