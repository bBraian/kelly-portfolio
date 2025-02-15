import styled from "styled-components";

export const ProjectSectionContainer = styled.section`
    @media (max-width: 1024px) {
        margin: 3.375rem 0 6.375rem 0;
    }
    display: flex;
    flex-direction: column;
    margin: 3.375rem 0 8.375rem 0;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${props => props.theme['titles']};
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;

    @media (max-width: 866px) {
        font-size: 2.6rem;
    }
`;

export const Subtitle = styled.h2`
    color: ${props => props.theme['contents']};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    margin-top: 2rem;
    text-align: center;
    
    @media (max-width: 866px) {
        font-size: 1.6rem;
        margin-top: 1.4rem;
    }
`;

export const ProjectsBox = styled.div`
    @media (max-width: 866px) {
        justify-content: center;
        margin-top: 3.6rem;
    }
    margin-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1366px;
    gap: 3rem 0;
`;