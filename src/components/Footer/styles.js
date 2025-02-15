import styled from "styled-components";

export const FooterContainer = styled.footer`
    @media (max-width: 1024px) {
        padding: 0 1.4rem;
    }
    margin: 0 auto; 
    display: flex;
    max-width: 1366px;
    width: 100%;
    padding: 0 3rem;
    flex-direction: column;
    padding-bottom: 3.5rem;
`;

export const FooterDesktop = styled.div`
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const RowSpaceBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterContact = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
`;

export const Separator = styled.hr`
    @media (max-width: 1024px) {
        margin: 1.2rem 0;
    }
    margin: 2.5rem 0;
    border: 1px solid ${props => props.theme['separator']};
`;

export const Icons = styled.div`
    display: flex;
    gap: 1.25rem;
    align-items: center;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;

    button {
        text-decoration: none;
        color: ${props => props.theme['contents']};
        box-shadow: none;
    }
`;

export const FooterMobile = styled.div`
    @media (max-width: 1024px) {
        display: flex;
    }
    display: none;
    flex-direction: column;

`;

export const FooterContactMobile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const AuthorText = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
`;