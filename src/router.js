import React from 'react';
import {createBrowserRouter } from "react-router-dom";
import Root from './components/common/root';
import {Home, ErrorPage, CardsSlider, WordsTable } from './components/pages';

const router = createBrowserRouter([
    {path: "", 
    element: <Root/>, 
    errorElement: <ErrorPage />, 
    children: [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "flashcards",
        element: <CardsSlider/>,
    },
    {
        path: "dictionary",
        element: <WordsTable/>,
    },
]}
])

export default router;

