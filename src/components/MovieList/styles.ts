import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  column-gap: 1em;
	row-gap: 1em;
  margin-top: 2em;

  @media (max-width: 1024px) {
    max-width: 1000px ;
  }
  @media (max-width: 768px) {
    max-width: 750px;
  }
`;

export const StyledItem = styled.div`
  flex-basis: 25%;
  @media (max-width: 1024px) {
    flex-basis: 40%;
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;