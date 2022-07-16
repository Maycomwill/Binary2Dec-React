import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
  html{
    min-height: 100%;
    background: #0b032b;
  }
  *, button, input{
    border: 0;
    outline: none;
    font-family: 'Roboto', -apple-system, system-ui, sans-serif;
  }
`;
