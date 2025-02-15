import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

export const HomeSection = styled.section`
    display: flex;
    height: calc(100vh);
    justify-content: space-evenly;
    max-width: 1366px;
    align-items: center;
    margin: 0 auto;
    padding-top: 3rem;
    width: 100%;

    @media (max-width: 1245px) {
        flex-direction: column;
        height: calc(100vh - 3.5rem);
        padding-top: 3.5vh;
        justify-content: space-evenly;
    }
`;

export const BackgroundGradient = styled.div`
    @media (max-width: 1245px) {
        width: 10rem;
        height: 10rem;
    }
    width: 23.75rem;
    height: 23.75rem;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(231,15,170,1) 0%, rgba(0,192,253,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;  
    overflow: hidden;
`;

export const HomeTitle = styled.h1`
    color: ${props => props.theme['home-title']};
    font-size: 3.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;

    
    @media (max-width: 1245px) {
        font-size: 2.6rem;
        line-height: 1.4;
        text-align: center;
    }
`;

export const TextGradient = styled.div`
    background: linear-gradient(270deg, rgba(231,15,170,1) 0%, rgba(0,192,253,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;

    @media (max-width: 1245px) {
        font-size: 2.6rem;
        line-height: 1.4;
    }
`;

export const ProfileImage = styled(LazyLoadImage)`
    border-radius: 50%;
    overflow: hidden;
    @media (max-width: 1245px) {
        width: 9.6rem;
        height: 9.6rem;
    }
    width: 22.8rem;
    height: 22.8rem;
`;