import React from "react";
import { Link } from "react-router-dom";
import { ISingleCharacterCardType } from "../types/type";

const SingleCharacterCard: React.FC<ISingleCharacterCardType> = ({
  character,
}) => {
  return (
    <div
      key={character?.id}
      className="flex items-center flex-col h-[100dvh] pt-24 bg-gray-300 dark:bg-gray-700"
    >
      <div className="flex flex-col relative items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-[100%] rounded-t-lg md:w-48 md:rounded-none md:rounded-s-lg"
          src={character?.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-8 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Gender: {character?.gender}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Created: {character?.created.slice(0, 10)}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Species: {character?.species}
          </p>
          <p
            className={`mb-3 absolute top-0 right-0 rounded-md w-20 text-center font-normal text-white dark:text-white ${
              character?.status === "Alive"
                ? "bg-green-500"
                : character?.status === "Dead"
                ? "bg-red-500"
                : character?.status === "unknown"
                ? "bg-gray-600"
                : null
            }`}
          >
            {character?.status}
          </p>
          <Link
            to={`/location/${character?.id}`}
            className="mb-3 font-normal text-blue-700 dark:text-blue-700"
          >
            Location: {character?.location.name}
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Origin: {character?.origin.name}
          </p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-400 text-2xl font-bold">
        Episode:
      </p>
      <div className="grid grid-cols-12">
        {character?.episode.map((episode, index) => {
          const lastCharacterInEpisode = episode.split("/").pop();
          return (
            <Link
              key={index}
              to={`/episode/${lastCharacterInEpisode}`}
              className="mx-1 text-2xl font-bold text-gray-700 dark:text-gray-400"
            >
              {" "}
              {lastCharacterInEpisode},{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SingleCharacterCard;
