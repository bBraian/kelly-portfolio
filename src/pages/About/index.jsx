import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { WorkExperienceCard } from "./components/WorkExperienceCard";
import {
  AboutContainer,
  TextAboutMe,
  Title,
  WorkExperienceBox,
} from "./styles";

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const { language } = useContext(AppContext);
  return (
    <AboutContainer>
      <Title>{language.about_me}</Title>
      <TextAboutMe>{language.desc_about_me}</TextAboutMe>

      <Title>{language.work_experience}</Title>
      <WorkExperienceBox>
        <WorkExperienceCard
          title="Arte Finalista"
          company="Gráfica Brochier"
          locale="Brochier"
          startDate={language.month[9] + ` 2023`}
          endDate="Atual"
        />
        <WorkExperienceCard
          title="Atendente"
          company="Farmácia Agafarma"
          locale="Brochier"
          startDate={`2018`}
          endDate={language.month[9] + ` 2023`}
        />
      </WorkExperienceBox>

      <Title>{language.education}</Title>
      <WorkExperienceBox>
        <WorkExperienceCard
          title="Superior de tecnologia em Design Gráfico"
          company="FSG"
          startDate={`2021`}
          endDate={`2023`}
        />
      </WorkExperienceBox>
    </AboutContainer>
  );
}
