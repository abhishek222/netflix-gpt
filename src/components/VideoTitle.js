import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black bg-opacity-60">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:opacity-80">
          ▶ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
