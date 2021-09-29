import React from 'react'
import { MovieContext } from 'context/MovieContext'
import { useContext } from 'react'
import MovieList from '../../components/MovieList'

const Liked = () => {
  const { likedMovies } = useContext(MovieContext);
  return (
    <MovieList movies={likedMovies} />
  )
}

export default Liked
