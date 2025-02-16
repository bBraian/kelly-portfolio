import {
  AuthorText,
  FooterContact,
  FooterContactMobile,
  FooterContainer,
  FooterDesktop,
  FooterLinks,
  FooterMobile,
  Icons,
  RowSpaceBetween,
  Separator,
} from "./styles";
import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import github from "../../assets/Vector.svg";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export function Footer() {
  const { homeRef, skillsRef, projectsRef, scrollToSection, language } =
    useContext(AppContext);
  const navigate = useNavigate();

  function handleNavigateTo(page) {
    navigate(page);
  }
  return (
    <FooterContainer>
      <FooterDesktop>
        <RowSpaceBetween>
          <span>Kelly Joner</span>

          <FooterContact>
            <span>+55 51 99922-2598</span>
            <span>kellyjoner000@gmail.com</span>

            <Icons>
              <a href="https://www.linkedin.com/in/kellyjoner/">
                <img src={linkedin} alt="Icone do Linkedin" />
              </a>
            </Icons>
          </FooterContact>
        </RowSpaceBetween>

        <Separator />

        <RowSpaceBetween>
          <FooterLinks>
            <button onClick={() => scrollToSection(homeRef)}>
              {language.home}
            </button>
            <button onClick={() => handleNavigateTo("/about")}>
              {language.about}
            </button>
            <button onClick={() => scrollToSection(skillsRef)}>
              {language.tech_stack}
            </button>
            <button onClick={() => scrollToSection(projectsRef)}>
              {language.projects}
            </button>
            <button onClick={() => handleNavigateTo("/contact")}>
              {language.contact}
            </button>
          </FooterLinks>

          <span>By bBraian</span>
        </RowSpaceBetween>
      </FooterDesktop>

      <FooterMobile>
        <FooterContactMobile>
          <span>+55 51 99922-2598</span>
          <span>kellyjoner000@gmail.com</span>
          <Icons>
            <a href="https://www.linkedin.com/in/braian-viacava-de-avila-536558186/">
              <img src={linkedin} alt="Icone do Linkedin" />
            </a>
          </Icons>
        </FooterContactMobile>
        <Separator />
        <AuthorText>Developed by Braian</AuthorText>
      </FooterMobile>
    </FooterContainer>
  );
}
