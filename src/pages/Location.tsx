import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { Character } from "../types/type";
import SingleLocationCard from "../components/SingleLocationCard";

const Location = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["episode", id],
    queryFn: () =>
      axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then((response) => response.data as Character),
    enabled: !!id,
  });

  const charactersInLocation = data?.residents
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
    <div className="pt-24 h-full bg-gray-100 dark:bg-gray-800">
      <div className="text-center text-gray-900 dark:text-white">
        <h1 className="text-5xl font-bold">Location: {data?.dimension}</h1>
        <h3 className="text-3xl">Name: {data?.name}</h3>
        <h3 className="text-3xl">Created: {data?.created.slice(0, 10)}</h3>
        <h3 className="text-3xl">Type: {data?.type}</h3>
      </div>
      <h1 className="text-center text-5xl font-bold my-5 text-gray-900 dark:text-white">
        Residents:
      </h1>

      <SingleLocationCard charactersInLocation={charactersInLocation} />
    </div>
  );
};

export default Location;
