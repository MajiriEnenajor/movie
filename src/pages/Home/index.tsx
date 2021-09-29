import React from 'react'
import { MovieContext } from 'context/MovieContext'
import { useContext } from 'react'
import MovieList from 'components/MovieList'

const Home = () => {
  const { movies } = useContext(MovieContext);
  return (
    <MovieList movies={movies} />
  )
}

export default Home
