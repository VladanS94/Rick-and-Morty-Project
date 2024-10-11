export interface Character {
    id: number;
    image:string;
    name: string;
    status: string;
    species: string;
    created: string;
    episode: Array<string>;
    characters: Array<string>;
    gender: string;
    air_date: string;
    dimension: string;
    type: string;
    residents: Array<string>;
    location: {
      name: string,
      url:string
    }
    origin: {
      name: string;
      url: string;
    }
  }

  export interface ICharactersCard {
    characters: Array<Character>;
  }

  export interface IThemeContextType {
    theme: string;
    toggleTheme: () => void;
  };

  export interface ISingleCharacterCardType {
    character: Character | undefined;
  };

  export interface ISingleEpisodeCardType {
    episode: Character | undefined;
    charactersInEpisodes: Array<string> | undefined;
  };

  export interface ISearchProps {
    setSearchQuery: (query: string) => void;
  }

  export interface IEpisodeCharactersType {
    characters: Array<string>
  }

  export interface ISingleLocationCardType {
    charactersInLocation: Array<string> | undefined;
  };

  export interface ProtectedRouteProps {
    children: React.ReactNode;
  }
