import styled from 'styled-components';

interface CardProps {
  backgroundImage?: string;
}

export const Container = styled.section`
  margin-top: 40px;

  h3 {
    margin-bottom: 20px;
  }
`;

export const Card = styled.div<CardProps>`
  width: 98%;
  height: 350px;
  margin: 5px;
  cursor: pointer;
  /* padding: 20px; */
  border-radius: 8px;
  display: block;
  position: relative;
  background: url(${props => props.backgroundImage}) no-repeat;
  background-size: cover;

  footer {
    /* opacity: 0.3; */
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    height: 100px;
    padding: 20px;

    visibility: hidden;
    transition: opacity 0.8;
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      background: #fafafa;
      border: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 50%;
      /* width: 60px; */
    }
  }

  &:hover footer {
    visibility: visible;
  }
`;
