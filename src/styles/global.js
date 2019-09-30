import { createGlobalStyle } from 'styled-components';
import 'rc-slider/assets/index.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700&display=swap');

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html,body,#root{
    height:100%;
  }

  body{
    text-rendering:optimizeLegibility;
    -webkit-font-smoothing:antialiased;
    background:#181818;
    font-family: 'Montserrat', sans-serif;
    color:#fff;
  }

  button{
    cursor: pointer;
  }
`;
