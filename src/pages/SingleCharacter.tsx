import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Character } from "../types/type";
import SingleCharacterCard from "../components/SingleCharacterCard";

const SingleCharacter = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["character", id],
    queryFn: () =>
      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.data as Character),
    enabled: !!id,
  });

  if (isLoading) return <p className="pt-24 text-gray-900 dark:text-white">Loading...</p>;
  if (error) return <p className="pt-24 text-gray-900 dark:text-white">Error: {error.message}</p>;

  return <SingleCharacterCard character={data} />;
};

export default SingleCharacter;
