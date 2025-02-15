import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;
    padding-top: 6.625rem;
    width: 100%;
    padding-bottom: 6.625rem;

    @media (max-width: 1345px) {
        padding: 6rem 5rem;
    }

    @media (max-width: 900px) {
        padding: 4.8rem 3.8rem;
    }

    @media (max-width: 766px) {
        padding: 2.6rem 1.4rem;
    }
`;

export const Title = styled.h1`
    margin-top: 2.375rem;
    color: ${props => props.theme['home-title']};
    font-size: 2.625rem;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    letter-spacing: -1px;
    line-height: 5rem;

    
    @media (max-width: 1245px) {
        font-size: 2rem;
        line-height: 1.4;
        text-align: center;
    }
`;

export const TextAboutMe = styled.p`
    margin-top: 2.375rem;
    color: ${props => props.theme['contents']};
    font-size: 1.125rem;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 1245px) {
        margin-top: 1.6rem;
        text-align: justify;
    }
`;

export const WorkExperienceBox = styled.div`
    margin-top: 2.375rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1.875rem;

    @media (max-width: 1245px) {
        margin-top: 1.6rem;
    }
`;