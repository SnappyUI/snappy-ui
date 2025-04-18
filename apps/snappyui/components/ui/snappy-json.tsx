// src/components/JsonViewer.tsx or ./components/ui/snappy-json.tsx
"use client"; // Required for useState and interactivity

import React, { useState } from "react";

// Define interfaces for props
type JsonNodeProps = {
  nodeKey: string | number;
  value: unknown;
  level: number;
  initiallyExpanded?: boolean; // Control initial expansion state
};

type JsonViewerProps = {
  jsonData: unknown; // Accept any valid JSON structure
  initialExpanded?: boolean; // Control initial expansion for the root
  rootName?: string | false; // Optional name for the root node, false to hide
};

// Helper function to determine the type of a value
function getValueType(value: unknown): string {
  if (value === null)
    return "null";
  if (Array.isArray(value))
    return "array";
  return typeof value;
}

// Recursive component to render each node (key-value pair, array item)
const JsonNode: React.FC<JsonNodeProps> = ({
  nodeKey,
  value,
  level,
  initiallyExpanded = false, // Default to collapsed
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded);
  const type = getValueType(value);

  const indent = level * 1.5; // Adjust multiplier for desired indentation (in rem)
  const indentStyle = { marginLeft: `${indent}rem` };

  const isExpandable = type === "object" || type === "array";
  const itemCount = isExpandable
    ? Object.keys(value as object | unknown[]).length
    : 0;

  const toggleExpand = () => {
    if (isExpandable) {
      setIsExpanded(!isExpanded);
    }
  };

  // --- Render Value ---
  const renderValue = () => {
    switch (type) {
      case "string":
        return (
          <span className="text-green-700 dark:text-green-400">
            &quot;
            {String(value)}
            &quot;
          </span>
        );
      case "number":
        return <span className="text-blue-600 dark:text-blue-400">{String(value)}</span>;
      case "boolean":
        return <span className="text-orange-600 dark:text-orange-400">{String(value)}</span>;
      case "null":
        return <span className="text-gray-500 dark:text-gray-400">null</span>;
      case "array":
        return (
          <>
            <span className="text-gray-700 dark:text-gray-300">[</span>
            {!isExpanded && itemCount > 0 && (
              <span className="text-gray-500 dark:text-gray-400 ml-1">
                ...
                {itemCount}
                {" "}
                items ...
              </span>
            )}
            {isExpanded && (
              (value as unknown[]).map((item, index) => (
                <JsonNode
                  key={`${level}-${nodeKey}-${index}`} // Unique key for React reconciliation
                  nodeKey={index}
                  value={item}
                  level={level + 1}
                  initiallyExpanded={initiallyExpanded}
                />
              ))
            )}
            {isExpanded && itemCount > 0 && (
              <div style={indentStyle} className="text-gray-700 dark:text-gray-300">]</div>
            )}
            {!isExpanded && <span className="text-gray-700 dark:text-gray-300">]</span>}
          </>
        );
      case "object":
        return (
          <>
            <span className="text-gray-700 dark:text-gray-300">{"{"}</span>
            {!isExpanded && itemCount > 0 && (
              <span className="text-gray-500 dark:text-gray-400 ml-1">
                ...
                {itemCount}
                {" "}
                keys ...
              </span>
            )}
            {isExpanded && (
              Object.entries(value as object).map(([key, val]) => (
                <JsonNode
                  key={`${level}-${nodeKey}-${key}`} // Unique key
                  nodeKey={key}
                  value={val}
                  level={level + 1}
                  initiallyExpanded={initiallyExpanded} // Pass down initial state preference
                />
              ))
            )}
            {isExpanded && itemCount > 0 && (
              <div style={indentStyle} className="text-gray-700 dark:text-gray-300">{"}"}</div>
            )}
            {!isExpanded && <span className="text-gray-700 dark:text-gray-300">{"}"}</span>}
          </>
        );
      default:
        return <span className="text-red-600 dark:text-red-400">Invalid Type</span>;
    }
  };

  // --- Render Node (Key + Value) ---
  return (
    <div style={indentStyle} className="font-mono text-sm">
      <span
        className={`cursor-pointer ${isExpandable ? "inline-flex items-center" : ""}`}
        onClick={toggleExpand}
        role="button" // Accessibility
        tabIndex={0} // Accessibility
        onKeyDown={e => e.key === "Enter" && toggleExpand()} // Accessibility
      >
        {isExpandable && (
          <span className="text-gray-500 dark:text-gray-400 mr-1 w-4 inline-block">
            {isExpanded ? "▼" : "►"}
            {" "}
            {/* Simple expand/collapse icons */}
          </span>
        )}
        {/* Render key for object properties */}
        {typeof nodeKey === "string" && (
          <span className="text-purple-600 dark:text-purple-400 mr-1">
            {/* FIX: Replace " with &quot; */}
            &quot;
            {nodeKey}
            &quot;:
          </span>
        )}
        {/* Don't render index key for array items explicitly, it's implied by order */}
      </span>
      <span className="ml-1">{renderValue()}</span>
    </div>
  );
};

// --- Main JsonViewer Component ---
const JsonViewer: React.FC<JsonViewerProps> = ({
  jsonData,
  initialExpanded = false, // Default to collapsed for the root
  rootName = "JSON", // Default root name
}) => {
  // Basic check if jsonData is valid structure to render
  const rootType = getValueType(jsonData);
  const isRootObjectOrArray = rootType === "object" || rootType === "array";

  if (!isRootObjectOrArray && rootName === false) {
    // If it's a primitive and no root name is desired, render directly (or handle as needed)
    // For simplicity, we'll wrap primitives too if rootName isn't explicitly false.
    // You might want a more specific handling for standalone primitive values.
    console.warn("JsonViewer received primitive data without a 'rootName'. Rendering may be basic.");
  }

  return (
    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-[#f5f5f5] dark:bg-[#110f0f] shadow-sm overflow-auto">
      {/* Render the root node */}
      <JsonNode
        nodeKey={rootName === false ? 0 : rootName} // Use rootName as key if provided, else an index
        value={jsonData}
        level={0}
        initiallyExpanded={initialExpanded}
      />
    </div>
  );
};

export default JsonViewer;
