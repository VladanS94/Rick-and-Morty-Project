import React from "react";
import { Character, ISingleEpisodeCardType } from "../types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleEpisodeCard: React.FC<ISingleEpisodeCardType> = ({
  episode,
  charactersInEpisodes,
}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["episode", charactersInEpisodes],
    queryFn: () =>
      axios
        .get(
          `https://rickandmortyapi.com/api/character/${charactersInEpisodes}`
        )
        .then((response) => response.data),
  });

  if (isLoading)
    return (
      <p className="pt-24 text-gray-900 dark:text-white">
        Loading characters...
      </p>
    );
  if (error)
    return (
      <p className="pt-24 text-gray-900 dark:text-white">
        Error: {error.message}
      </p>
    );

  return (
    <div className="pt-24 grid place-items-center">
      <div className="text-center text-gray-900 dark:text-white">
        <h1 className="text-5xl font-bold">Episode name: {episode?.name}</h1>
        <h3 className="text-3xl">Air date: {episode?.air_date}</h3>
        <h3 className="text-3xl">Created: {episode?.created.slice(0, 10)}</h3>
        <h3 className="text-3xl">Episode: {episode?.episode}</h3>
      </div>
      <h1 className="text-5xl mt-5 font-bold text-gray-900 dark:text-gray-100">
        Characters:
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 p-4 bg-gray-300 dark:bg-gray-700">
        {data?.map((character: Character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            className="rounded-lg bg-gray-100 dark:bg-gray-800 text-center"
          >
            <img
              src={character.image}
              alt={character.name}
              className="object-contain w-full rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {character.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Species: {character.species}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Status: {character.status}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleEpisodeCard;
