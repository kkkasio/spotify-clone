import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;
`;

export const Current = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 48px;
    width: 48px;
  }

  div {
    margin: 0 14px;
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 14px;
    color: #fff;
    line-height: 20px;
    letter-spacing: 0.015em;
    text-align: left;
  }

  small {
    font-size: 12px;
    color: #b3b3b3;
    margin-top: 5px;
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
    outline: 0;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;
export const ProgressSlider = styled.div`
  width: 500px;
  margin: 0 15px;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 100px;

  img {
    margin-right: 5px;
  }
`;
