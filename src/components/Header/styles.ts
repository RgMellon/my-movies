import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
	0% {
		transform: scale(0.80);

	}

	70% {
		transform: scale(1);

	}

	100% {
		transform: scale(0.80);

	}
}`;

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px;
  width: 100%;
  max-width: 980px;
  margin: 0 auto;

  > ul {
    display: flex;
    list-style: none;

    > li {
      margin-right: 50px;
      transform: transition 2s;

      a {
        text-decoration: none;
        font-weight: 200;
        color: #626462;
        font-size: 18px;
      }

      &:hover {
        color: #aa3d32;
        border-bottom: 1px solid #aa3d32;
      }
    }
  }

  div {
    display: flex;

    > p {
      margin-left: 10px;
      /* margin-top: 1px; */
      font-size: 25px;
    }

    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0px;
      background: inherit;

      transform: scale(1);
      animation: ${pulse} 2s infinite;
    }
  }
`;

export const ContentNotification = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  width: 20px;
  height: 20px;
  background: #aa3d32;
  position: absolute;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  span {
    display: block;
    padding: 3px;
    color: #fff;
    font-size: 10px;
  }
`;

export const FavCard = styled.li`
  width: 100%;
  height: 80px;
  background: #fafafa;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  img {
    width: 40px;
    border-radius: 2px;
    border: 1px solid #fafafa;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    border: 0px;
  }

  p {
    font-size: 10px;
    width: 100px;
  }

  & + li {
    margin-top: 5px;
  }
`;

export const Notifications = styled.div`
  section {
    padding: 10px;
    /* background: red; */
    width: 100%;
    overflow: scroll;

    ul {
      display: inline-block;
      width: 100%;
    }
  }

  background: #fff;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  /* opacity: 0; */
  transition: opacity 0.4;

  position: absolute;
  bottom: calc(100% + 12px);
  width: 250px;
  height: 300px;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  z-index: 99999;
  color: #312e38;
  padding: 10px;

  /* overflow: scroll; */

  &::before {
    content: '';
    border-style: solid;
    border-color: #fff transparent;
    border-width: 0 6px 6px 6px;
    top: -5px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
