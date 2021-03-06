import React from 'react';
import ReactDOM from 'react-dom';
import store from "./app/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { css, Global } from "@emotion/react";


const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&family=Raleway:wght@600;800&family=Roboto:wght@300;400;500;700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }
  body{
    background-image: url("https://fondosmil.com/fondo/3879.jpg");
    background-size: cover;
    padding: 20px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles}/>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
