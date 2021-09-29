import styled, { css } from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const StyledContainer = styled.div`
border-radius: 15px;
background-color: palegreen;
box-shadow: 5px 10px #888888;
`;

export const StyledCaptionContainer = styled.div`
padding: 1em;
display: flex;
justify-content: space-between;
`;

export const StyledImage = styled.img`
border-radius: 15px 15px 0 0;
width: 100%;
`;

export const StyledCaption = styled.h3`
font-size: 1em;
flex-basis: 75%;
`;

export const StyledLikeButton = styled(FavoriteIcon) <{ isLiked: boolean }>`
${({ isLiked }) => css`
    color: ${isLiked ? 'red' : 'white'};
`}
`;

export const StyledButton = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
`;