import React from "react";
import { Link } from "react-router-dom";
import { Character, ICharactersCard } from "../types/type";

const CharactersCard: React.FC<ICharactersCard> = ({ characters }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 px-5">
      {characters.map((character: Character) => {
        return (
          <div
            key={character.id}
            className="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Link to={`/character/${character.id}`}>
              <img
                className="rounded-t-lg w-full"
                src={character.image}
                alt=""
              />
            </Link>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {character.name}
              </h5>
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
                to={`/location/${character.id}`}
                className="mb-3 font-medium text-xl text-blue-700 dark:text-blue-700"
              >
                Location: {character.location.name}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersCard;
