import {
  Language,
  LanguageBox,
  Link,
  MobileMenuContainer,
  NavbarMobile,
  SocialLinkBox,
  SwitchRoot,
  SwitchThumb,
  ThemeSwitcherBox,
} from "./styles";
import brazil from "../../assets/brazil_flag.svg";
import usa from "../../assets/us_flag.svg";

import { portuguese } from "../../data/languages/portuguese";
import { english } from "../../data/languages/english";

import { light } from "../../styles/themes/light";

import twitter from "../../assets/ant-design_twitter-circle-filled.svg";
import linkedin from "../../assets/entypo-social_linkedin-with-circle.svg";
import { useContext } from "react";

import { FiMoon, FiSun } from "react-icons/fi";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

export function MobileMenu({ setMobileNav }) {
  const {
    changeTheme,
    theme,
    language,
    setLanguage,
    homeRef,
    skillsRef,
    projectsRef,
    scrollToSection,
  } = useContext(AppContext);

  const navigate = useNavigate();

  function handleChangeLanguage(lang) {
    if (lang !== language) {
      setLanguage(lang);
    }
  }

  function handleNavigateTo(page, section = "") {
    setMobileNav(false);
    if (page === "/about" || page === "/contact") {
      navigate(page);
    } else {
      if (
        window.location.pathname.includes("/about") ||
        window.location.pathname.includes("/contact")
      ) {
        navigate("/", { state: { targetSection: section } });
      } else {
        scrollToSection(page);
      }
    }
  }
  return (
    <MobileMenuContainer>
      <NavbarMobile>
        <Link onClick={() => handleNavigateTo(homeRef, "homeRef")}>
          {language.home}
        </Link>
        <Link onClick={() => handleNavigateTo("/about")}>{language.about}</Link>
        <Link onClick={() => handleNavigateTo(skillsRef, "skillsRef")}>
          {language.tech_stack}
        </Link>
        <Link onClick={() => handleNavigateTo(projectsRef, "projectsRef")}>
          {language.projects}
        </Link>
        <Link onClick={() => handleNavigateTo("/contact")}>
          {language.contact}
        </Link>

        <LanguageBox>
          <Language onClick={() => handleChangeLanguage(english)}>
            <img
              src={usa}
              style={language === english ? { opacity: 1 } : { opacity: 0.5 }}
            />
          </Language>
          <Language onClick={() => handleChangeLanguage(portuguese)}>
            <img
              src={brazil}
              style={
                language === portuguese ? { opacity: 1 } : { opacity: 0.5 }
              }
            />
          </Language>
        </LanguageBox>

        <ThemeSwitcherBox>
          <p>{language.apperance}</p>

          <SwitchRoot onCheckedChange={changeTheme}>
            <SwitchThumb>
              {theme === light ? <FiSun /> : <FiMoon />}
            </SwitchThumb>
          </SwitchRoot>
        </ThemeSwitcherBox>

        <SocialLinkBox>
          <a href="https://www.linkedin.com/in/kellyjoner/">
            <img src={linkedin} alt="Icone do Linkedin" />
          </a>
        </SocialLinkBox>
      </NavbarMobile>
    </MobileMenuContainer>
  );
}
