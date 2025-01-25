import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div>
      <form className="flex items-center justify-center pt-[10%]">
        <input
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-8 pr-20 rounded-lg text-sm focus:outline-none w-[50%]"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="bg-purple-800 text-white rounded-lg px-4 py-2 m-2">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
