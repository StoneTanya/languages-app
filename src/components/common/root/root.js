import React from "react";
import {Outlet} from 'react-router-dom';
import {Container} from '@mui/material';
import Header from '../header';
import Footer from '../footer';

export default function Root(props) {
    console.log(props)
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

