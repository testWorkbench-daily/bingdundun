import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, unstable_createMuiStrictModeTheme, StyledEngineProvider } from '@mui/material/styles';
import { themeOptions } from './config/theme';
import CssBaseline from '@mui/material/CssBaseline';

const theme = unstable_createMuiStrictModeTheme(themeOptions);

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}><App /></ThemeProvider>
    </StyledEngineProvider>
    <p>声明：本文涉及奥运元素3D模型仅用于个人学习、研究和欣赏，请勿二次修改、非法传播、转载、出版、商用、及进行其他获利行为。</p>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
