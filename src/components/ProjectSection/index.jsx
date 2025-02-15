import { Project } from "../Project";
import { ProjectsBox, ProjectSectionContainer, Subtitle, Title } from "./styles";
import { projects } from "../../data/projects";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function ProjectSection() {
    const { language, projectsRef } = useContext(AppContext)
    return (
        <ProjectSectionContainer ref={projectsRef}>
            <Title>{language.projects}</Title>
            <Subtitle>{language.projects_section_description}</Subtitle>

            <ProjectsBox>
                {projects.map(project => {
                    return (
                        <Project key={project.id} data={project} /> 
                    )
                })}
            </ProjectsBox>
        </ProjectSectionContainer>
    )
}