import React from 'react'
import { useEffect, useState } from 'react';
import { MovieProvider, Movie } from 'context/MovieContext';

const {
  REACT_APP_API_KEY,
  REACT_APP_MOVIE_URL
} = process.env;

const UseMovieContext: React.FC = ({ children }) => {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [likedMovies, setLikedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`${REACT_APP_MOVIE_URL}?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then(res => res.json())
      .then(response => setMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  const addLikedMovie = (movie: Movie) => {
    setLikedMovies(prev => {
      const index = likedMovies.findIndex(m => m.id === movie.id)
      const temp = [...prev]

      if (index === -1) {
        temp.push(movie);
      } else {
        temp.splice(index, 1);
      }
      return [...temp]
    });
  }

  return (
    <MovieProvider
      value={{
        movies,
        likedMovies,
        addLikedMovie,
        page
      }}
    >
      {children}
    </MovieProvider>
  )
}

export default UseMovieContext
