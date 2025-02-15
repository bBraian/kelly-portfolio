import { Skill, SkillsBox, SkillsSection, Subtitle, Title } from "./styles";

import adobe_illustrator from "../../assets/devicon/adobe_illustrator.svg";
import adobe_photoshop from "../../assets/devicon/adobe_photoshop.svg";
import corel from "../../assets/devicon/corel.svg";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function SkillSection() {
  const { skillsRef, language } = useContext(AppContext);
  return (
    <SkillsSection ref={skillsRef}>
      <Title>{language.my_tech_stack}</Title>
      <Subtitle>{language.tecnologies_section_description}</Subtitle>

      <SkillsBox>
        <Skill
          src={adobe_illustrator}
          title="Adobe Illustrator"
          alt="Ícone Adobe Illustrator"
        />
        <Skill
          src={adobe_photoshop}
          title="Adobe Photoshop"
          alt="Ícone Adobe Photoshop"
        />
        <Skill src={corel} title="CorelDraw" alt="Ícone CorelDraw" />
      </SkillsBox>
    </SkillsSection>
  );
}
