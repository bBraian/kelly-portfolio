import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ProjectContainer = styled.div`
  @media (max-width: 1024px) {
    width: 45%;
  }
  @media (max-width: 866px) {
    width: 88%;
  }
  width: 30%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  /* margin-bottom: 2rem; */
  -webkit-box-shadow: 2px 2px 100px 0px ${(props) => props.theme["box-shadow"]};
  -moz-box-shadow: 2px 2px 100px 0px ${(props) => props.theme["box-shadow"]};
  box-shadow: 2px 2px 100px 0px ${(props) => props.theme["box-shadow"]};
`;

export const ProjectImage = styled(LazyLoadImage)`
  overflow: hidden;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme["project-bg"]};
  border-radius: 0 0 20px 20px;
  padding: 1.75rem;
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${(props) => props.theme["titles"]};
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: ${(props) => props.theme["titles"]};
  margin-top: 1rem;
`;

export const TechStackBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
`;

export const TechTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${(props) => props.theme["titles"]};
`;

export const TechBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

export const TechImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: fill;
`;

export const LinkBox = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  text-decoration-color: ${(props) => props.theme["white"]};
`;

export const Icon = styled.img``;

export const TextLink = styled.span`
  color: ${(props) => props.theme["white"]};
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
`;
