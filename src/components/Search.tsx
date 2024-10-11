import React from "react";
import { ISearchProps } from "../types/type";

const Search: React.FC<ISearchProps> = ({ setSearchQuery }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex flex-col-reverse w-full items-center">
      <input
        placeholder="Search Characters"
        className="peer w-[50%] outline-none border  text-gray-900  rounded-md pl-2 py-1 duration-500 border-black focus:border-dashed relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
        type="text"
        onChange={handleSearch}
      />
      <span className="pl-2 font-medium text-xl duration-500 opacity-0 text-gray-900 dark:text-gray-100 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0">
        Search Characters
      </span>
    </div>
  );
};

export default Search;
