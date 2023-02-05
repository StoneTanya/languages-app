import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import {CardsSlider, WordsTable} from './components';
import {Root, Home, ErrorPage} from './pages';

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

