import React from 'react'
import { IMovieContext, Movie } from './types'

const DefaultMovieContext: IMovieContext = {
  movies: [],
  likedMovies: [],
  addLikedMovie: (movie: Movie): void => { },
  page: 1
}

const MovieContext = React.createContext(DefaultMovieContext)

const { Provider } = MovieContext

export {
  Provider as MovieProvider,
  DefaultMovieContext
}

export default MovieContext