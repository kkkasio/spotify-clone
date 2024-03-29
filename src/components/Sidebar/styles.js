import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 200px;
  background: #121212;
  color: #b3b3b3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  div {
    margin-bottom: 15px;
    a {
      text-decoration: none;
      color: inherit;
    }
    svg:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  &:first-child {
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;

    a {
      display: flex;
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }

      svg {
        margin-right: 13px;
      }
    }

    span {
      text-transform: uppercase;
      font-size: 11px;
      line-height: 22px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  font-weight: 700;
  &:hover {
    color: #fff;
  }

  img {
    margin-right: 15px;
  }
`;
