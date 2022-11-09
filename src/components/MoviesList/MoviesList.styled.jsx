import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 20px;
`;

export const MoviesGallegy = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 18px;
  row-gap: 24px;
`;

export const MovieItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: scale 250ms linear;
  max-height: 380px;

  &:hover {
    scale: 1.1;
  }
`;

export const MovieName = styled.p`
  font-size: 14px;
  font-weight: 600;
  max-width: 215px;
  max-height: 43px;
  padding: 12px 4px;
`;
