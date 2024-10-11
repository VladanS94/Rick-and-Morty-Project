import React, { useEffect, useRef, useState } from "react";
import { Character } from "../types/type";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CharactersCard from "../components/CharactersCard";
import Search from "../components/Search";
import Loader from "../components/Loader";

const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const bottomElementRef = useRef<HTMLDivElement | null>(null);

  const { data } = useQuery({
    queryKey: ["repoData", pageNumber],
    queryFn: () =>
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
        .then((response) => response.data.results as Character[]),
  });

  useEffect(() => {
    if (data) {
      setCharacters((prevCharacters) => [...prevCharacters, ...data]);
    }
  }, [data]);

  const addMoreCharacters = () => {
    setTimeout(() => {
      setPageNumber((prev) => prev + 1);
      setLoading(false);
    }, 2000);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          addMoreCharacters();
          setLoading(true);
        }
      },
      { threshold: 1.0 }
    );

    if (bottomElementRef.current) {
      observerRef.current.observe(bottomElementRef.current);
    }

    return () => {
      if (observerRef.current && bottomElementRef.current) {
        observerRef.current.unobserve(bottomElementRef.current);
      }
    };
  }, []);

  return (
    <div className="py-24  bg-gray-300 dark:bg-gray-700">
      <div className="grid place-items-center pb-5">
        <Search setSearchQuery={setSearchQuery} />
      </div>
      <CharactersCard characters={filteredCharacters} />
      <div ref={bottomElementRef}></div>
      {loading && <Loader />}
    </div>
  );
};

export default Characters;
