import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { WorkExperienceCard } from "./components/WorkExperienceCard";
import { AboutContainer, TextAboutMe, Title, WorkExperienceBox } from "./styles";

export function About() {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [])

    const { language } = useContext(AppContext);
    return (
        <AboutContainer>
            <Title>{language.about_me}</Title>
            <TextAboutMe>
                {language.desc_about_me}
            </TextAboutMe>

            <Title>{language.work_experience}</Title>
            <WorkExperienceBox>

                <WorkExperienceCard 
                    title="Software Developer Jr" 
                    company="Openfy" 
                    locale="Brochier"
                    startDate={language.month[11] + ` 2020`}
                    endDate={language.month[7] + ` 2021`}
                />
                <WorkExperienceCard 
                    title="Web Developer" 
                    company="Datacode Sistemas" 
                    locale="Brochier"
                    startDate={language.month[7] + ` 2021`}
                    endDate={language.month[11] + ` 2022`}
                />
            </WorkExperienceBox>

            <Title>{language.education}</Title>
            <WorkExperienceBox>
                <WorkExperienceCard 
                    title="Analysis and systems development" 
                    company="Unisinos"
                    startDate={language.month[1] + ` 2020`}
                    endDate={language.month[5] + ` 2024`}
                />
            </WorkExperienceBox>
        </AboutContainer>
    )
}