import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import { ContextProvider } from "../context/context";

export default function Root() {
  return (
    <>
        <Header />
        <ContextProvider>
          <Container>
            <Outlet />
          </Container>
        </ContextProvider>
        <Footer />
    </>
  );
}
