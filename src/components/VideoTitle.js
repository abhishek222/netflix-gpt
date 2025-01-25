import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black bg-opacity-60">
      <div className="text-sm md:text-6xl font-bold">{title}</div>
      <div className="hidden md:block py-6 text-sm md:text-lg w-1/2">
        {overview}
      </div>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-3 md:p-4 md:px-12 text-sm md:text-xl rounded-lg hover:opacity-80">
          ▶ Play
        </button>
        <button className="hidden md:block bg-gray-500 text-white p-4 px-12 text-sm md:text-xl bg-opacity-50 rounded-lg">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
