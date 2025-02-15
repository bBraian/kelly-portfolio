import {
  BackgroundGradient,
  HomeContainer,
  HomeSection,
  HomeTitle,
  ProfileImage,
  TextGradient,
} from "./styles";
import profile from "../../assets/images/profile_pic.png";

import { ProjectSection } from "../../components/ProjectSection";
import { Footer } from "../../components/Footer";
import { SkillSection } from "../../components/SkillSection";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useLocation } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";

export function Home() {
  const { language, homeRef, skillsRef, projectsRef, scrollToSection } =
    useContext(AppContext);
  const { state } = useLocation();
  const { targetSection } = state || {};
  const [imageHeight, setImageHeight] = useState(364.8);
  useEffect(() => {
    if (targetSection != "") {
      switch (targetSection) {
        case "homeRef":
          scrollToSection(homeRef);
          break;
        case "skillsRef":
          scrollToSection(skillsRef);
          break;
        case "projectsRef":
          scrollToSection(projectsRef);
          break;
      }
    }

    if (window.screen.width < 1245) {
      setImageHeight(153.6);
    }
  }, []);
  return (
    <HomeContainer ref={homeRef}>
      <HomeSection>
        <div>
          <HomeTitle>
            {language.hi} 👋,
            <br />
            {language.my_name_is}
            <br />
            <TextGradient>Kelly Joner</TextGradient>
            {language.im_a_software_developer}
          </HomeTitle>
        </div>
        <div>
          <BackgroundGradient>
            <ProfileImage src={profile} effect="blur" height={imageHeight} />
          </BackgroundGradient>
        </div>
      </HomeSection>

      <SkillSection />

      <ProjectSection />

      <Footer />
    </HomeContainer>
  );
}
