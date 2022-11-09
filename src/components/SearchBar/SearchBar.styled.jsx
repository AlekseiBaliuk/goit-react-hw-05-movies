import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  padding: 0 20px;
`;

export const Input = styled.input`
  width: 400px;
  margin-right: 12px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: coral;
  border: 1px solid coral;
  border-radius: 4px;
  color: #fff;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: coral;
    background-color: #fff;
  }
`;
