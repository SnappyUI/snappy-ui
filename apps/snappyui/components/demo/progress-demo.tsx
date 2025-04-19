"use client";
import React, { useState } from "react";

import { CircularProgress, ProgressBar } from "../ui/snappy-progress-bar";

// Example 1: Basic File Upload with Progress Bar
export function FileUploadExample() {
  const [uploadProgress, setUploadProgress] = useState(0);

  // Simulated file upload
  const handleFileUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-medium mb-4">File Upload Example</h2>
      <ProgressBar
        className="dark:bg-white bg-zinc-950"
        value={uploadProgress}
        label="Uploading file..."
        timeLeft={uploadProgress < 100 ? `Estimated time left: ${20 - Math.floor(uploadProgress / 5)}s` : "Complete!"}
      />
      <button
        onClick={handleFileUpload}
        className="mt-4 px-4 py-2 bg-zinc-600 text-white rounded-md"
      >
        {uploadProgress < 100 ? "Upload File" : "Upload Complete"}
      </button>
    </div>
  );
}

// Example 2: Download Progress with Circular Progress
export function DownloadExample() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const totalSize = 100; // MB

  // Simulated download
  const startDownload = () => {
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= totalSize) {
          clearInterval(interval);
          return totalSize;
        }
        return prev + 2;
      });
    }, 200);
  };

  return (
    <div className="p-4 border rounded-lg flex flex-col items-center">
      <h2 className="text-lg font-medium mb-4">Download Progress</h2>

      <CircularProgress
        value={downloadProgress}
        max={totalSize}
        size={150}
        labelClassName="text-black dark:text-white"
      />

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {downloadProgress < totalSize
            ? `Downloading: ${downloadProgress} MB of ${totalSize} MB`
            : "Download Complete!"}
        </p>

        <button
          onClick={startDownload}
          className="mt-4 px-4 py-2 dark:bg-white dark:text-black bg-black text-white rounded-md"
          disabled={downloadProgress > 0 && downloadProgress < totalSize}
        >
          {downloadProgress === 0
            ? "Start Download"
            : downloadProgress < totalSize ? "Downloading..." : "Download Again"}
        </button>
      </div>
    </div>
  );
}

// Example 3: Slider Component with Progress Bar
export function SliderExample() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSliderValue(Number.parseInt(e.target.value));
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-medium mb-4">Custom Slider</h2>

      <ProgressBar value={sliderValue} isSlider={true} className="dark:bg-white bg-black" />

      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="w-full mt-2"
      />

      <div className="mt-2">
        <p>
          Selected value:
          {" "}
          {sliderValue}
        </p>
      </div>
    </div>
  );
}
