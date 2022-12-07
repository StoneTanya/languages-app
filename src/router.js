import React from 'react';
import {createBrowserRouter } from "react-router-dom";
import Root from './components/common/root';
import {Home, ErrorPage, CardsSlider, WordsTable } from './components/pages';
import Main, { loader as rootLoader } from "./components/common/main/Main";

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
        path: "/",
        loader: rootLoader,
        element: <Main/>,
        children: [
            {
                path: "flashcards",
                element: <CardsSlider/>,
            },
            {
                path: "dictionary",
                element: <WordsTable/>,
            },
        ]
    },
    ]
}
])

export default router;

