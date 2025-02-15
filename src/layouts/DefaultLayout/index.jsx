import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function DefaultLayout() {
    const {theme} = useContext(AppContext)
    return (
        <LayoutContainer>
            <ThemeProvider theme={theme}>
                <Header />
                <Outlet />
                <GlobalStyle />
            </ThemeProvider>
        </LayoutContainer>
    )
}