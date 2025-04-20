"use client";

import React, { useState } from "react";

type JsonNodeProps = {
  nodeKey: string | number;
  value: unknown;
  level: number;
  initiallyExpanded?: boolean;
};

type JsonViewerProps = {
  jsonData: unknown;
  initialExpanded?: boolean;
  rootName?: string | false;
};

function getValueType(value: unknown): string {
  if (value === null)
    return "null";
  if (Array.isArray(value))
    return "array";
  return typeof value;
}

const JsonNode: React.FC<JsonNodeProps> = ({
  nodeKey,
  value,
  level,
  initiallyExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(initiallyExpanded);
  const type = getValueType(value);

  const indent = level * 1.5;
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
                  key={`${level}-${nodeKey}-${index}`}
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
                  key={`${level}-${nodeKey}-${key}`}
                  nodeKey={key}
                  value={val}
                  level={level + 1}
                  initiallyExpanded={initiallyExpanded}
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

  return (
    <div style={indentStyle} className="font-mono text-sm">
      <span
        className={`cursor-pointer ${isExpandable ? "inline-flex items-center" : ""}`}
        onClick={toggleExpand}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === "Enter" && toggleExpand()}
      >
        {isExpandable && (
          <span className="text-gray-500 dark:text-gray-400 mr-1 w-4 inline-block">
            {isExpanded ? "▼" : "►"}
            {" "}

          </span>
        )}

        {typeof nodeKey === "string" && (
          <span className="text-purple-600 dark:text-purple-400 mr-1">

            &quot;
            {nodeKey}
            &quot;:
          </span>
        )}

      </span>
      <span className="ml-1">{renderValue()}</span>
    </div>
  );
};

const JsonViewer: React.FC<JsonViewerProps> = ({
  jsonData,
  initialExpanded = false,
  rootName = "JSON",
}) => {
  const rootType = getValueType(jsonData);
  const isRootObjectOrArray = rootType === "object" || rootType === "array";

  if (!isRootObjectOrArray && rootName === false) {
    console.warn("JsonViewer received primitive data without a 'rootName'. Rendering may be basic.");
  }

  return (
    <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-[#f5f5f5] dark:bg-[#110f0f] shadow-sm overflow-auto">

      <JsonNode
        nodeKey={rootName === false ? 0 : rootName}
        value={jsonData}
        level={0}
        initiallyExpanded={initialExpanded}
      />
    </div>
  );
};

export default JsonViewer;
