import React from 'react'
import { Movie } from 'context/MovieContext'
import Card from 'components/Card'
import { StyledContainer, StyledItem } from './styles'

interface IMoveList {
  movies: Movie[]
}

const MovieList: React.FC<IMoveList> = ({ movies }) => {
  return (
    <StyledContainer>
      {movies?.map(movie => <StyledItem><Card movie={movie} key={movie.id} /></StyledItem>)}
    </StyledContainer>
  )
}

export default MovieList
