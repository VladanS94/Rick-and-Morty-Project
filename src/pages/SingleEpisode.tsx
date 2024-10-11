import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Character } from "../types/type";
import axios from "axios";
import { useParams } from "react-router-dom";
import SingleEpisodeCard from "../components/SingleEpisodeCard";

const SingleEpisode = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["episode", id],
    queryFn: () =>
      axios
        .get(`https://rickandmortyapi.com/api/episode/${id}`)
        .then((response) => response.data as Character),
    enabled: !!id,
  });

  const charactersInEpisodes = data?.characters
    .map((char) => char.split("/").pop())
    .filter((charId): charId is string => !!charId);

  if (isLoading)
    return <p className="pt-24 text-gray-900 dark:text-white">Loading...</p>;
  if (error)
    return (
      <p className="pt-24 text-gray-900 dark:text-white">
        Error: {error.message}
      </p>
    );

  return (
    <SingleEpisodeCard
      episode={data}
      charactersInEpisodes={charactersInEpisodes || []}
    />
  );
};

export default SingleEpisode;
