import { Skill, SkillsBox, SkillsSection, Subtitle, Title } from "./styles";

import { tecnologies } from "../../data/tecnologies";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function SkillSection() {
  const { skillsRef, language } = useContext(AppContext);
  return (
    <SkillsSection ref={skillsRef}>
      <Title>{language.my_tech_stack}</Title>
      <Subtitle>{language.tecnologies_section_description}</Subtitle>

      <SkillsBox>
        {tecnologies.map((tecnology) => (
          <Skill
            key={tecnology.id}
            src={tecnology.icon}
            title={tecnology.name}
            alt={tecnology.name}
          />
        ))}
      </SkillsBox>
    </SkillsSection>
  );
}
