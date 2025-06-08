import styled from "styled-components";

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3.375rem 0 8.375rem 0;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["titles"]};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 3rem;
  text-align: center;

  @media (max-width: 866px) {
    font-size: 2.6rem;
  }
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme["contents"]};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;

  @media (max-width: 866px) {
    font-size: 1.6rem;
    margin-top: 1.4rem;
  }
`;

export const SkillsBox = styled.div`
  @media (max-width: 1366px) {
    gap: 3.2rem 4.3rem;
  }

  @media (max-width: 866px) {
    margin-top: 3.6rem;
    gap: 2rem 2.5rem;
  }

  margin-top: 6rem;
  display: flex;
  width: 100%;
  max-width: 1280px;
  gap: 4rem 4rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Skill = styled.img`
  @media (max-width: 866px) {
    max-width: 4.5rem;
    max-height: 4.5rem;
  }
  max-width: 6rem;
  max-height: 6rem;
  object-fit: fill;
`;
