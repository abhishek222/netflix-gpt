import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGPTSearchClick = async () => {
    const searchQuery =
      "act as a movies recommmendation system and me result for query " +
      searchText.current.value +
      ". Please give me names of 5 movies, comma separated like the example given ahead. Example Result: Gadar, sholey, golmal, Koi mil Gaya, Dosti";
    //make API call to GPTAPI & get result
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choises);
  };
  return (
    <div>
      <form
        className="flex items-center justify-center pt-[10%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="border-2 border-gray-300 bg-white h-10 px-8 pr-20 rounded-lg text-sm focus:outline-none w-[50%]"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-purple-800 text-white rounded-lg px-4 py-2 m-2"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
