import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import './index.scss';
import {ApiContext} from "./pages/root/root";
import dataConstructor from "./services/apiDataConstructor";
import router from './router';

const apiData = new dataConstructor();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <React.StrictMode>
      <ApiContext.Provider value={apiData}>
          <RouterProvider router={router} />
      </ApiContext.Provider>
    </React.StrictMode>
  </ThemeProvider>
);
