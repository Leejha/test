import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "./assets/styles/global-styles";
import { theme } from "./assets/styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);



