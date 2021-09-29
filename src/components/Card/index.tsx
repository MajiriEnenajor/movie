import React from 'react'
import { MovieContext, Movie } from 'context/MovieContext'
import { useContext } from 'react'
import {
  StyledContainer,
  StyledCaptionContainer,
  StyledImage,
  StyledCaption,
  StyledLikeButton,
  StyledButton
} from './style'

interface ICard {
  movie: Movie
}

const Card: React.FC<ICard> = ({ movie }) => {
  const { addLikedMovie, likedMovies } = useContext(MovieContext);
  return (
    <StyledContainer>
      <StyledImage src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}`} />
      <StyledCaptionContainer>
        <StyledCaption>{movie.title}</StyledCaption>
        <StyledButton onClick={() => addLikedMovie(movie)}>
          <StyledLikeButton isLiked={likedMovies.some(x => x.id === movie.id)} fontSize="large" />
        </StyledButton>
      </StyledCaptionContainer>
    </StyledContainer>
  )
}

export default Card
