import { Box, FlatList } from "native-base";
import { Navbar } from "../components/Nav";
import { useState, useEffect } from "react";
import { API_KEY } from "@env";
import Movie from "../components/Movie";

export const Home = ({ navigation }) => {
  const [genre, setGenre] = useState(28);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchGenre = async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`
      );
      const movies = await response.json();
      setMovies(movies.results);
    };
    fetchGenre(genre);
  }, [genre]);

  return (
    <Box backgroundColor={"darkBlue.900"} padding={2} height={"full"}>
      <Navbar setGenre={setGenre} />
      <Box pb={10}>
        <FlatList
          data={movies}
          renderItem={({ item }) => (
            <Movie movie={item} navigation={navigation} />
          )}
          keyExtractor={(movie) => movie.id}
          initialNumToRender={2}
        />
      </Box>
    </Box>
  );
};
