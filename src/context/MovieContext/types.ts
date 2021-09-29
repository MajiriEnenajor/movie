export type Movie = {
    id?: number
    title?: string
    poster_path?: string
  }
  
  export interface IMovieContext {
    movies: Movie[]
    likedMovies: Movie[]
    addLikedMovie: (movie: Movie) => void
    page: number
  }