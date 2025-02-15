import { Description, Icon, Link, LinkBox, ProjectContainer, ProjectContent, ProjectImage, TechBox, TechImg, TechStackBox, TechTitle, TextLink, Title } from "./styles";

import githubIcon from "../../assets/github.svg";
import linkIcon from "../../assets/link.svg";
import 'react-lazy-load-image-component/src/effects/blur.css';

import { english } from "../../data/languages/english";

import { tecnologies } from "../../data/tecnologies";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Project(props) {
    const { language } = useContext(AppContext);
    return (
        <ProjectContainer>

            <ProjectImage src={props.data.image} effect="blur" placeholderSrc={props.data.image} height={260} />

            <ProjectContent>
                <Title>{props.data.name}</Title>

                <Description>
                    { language === english ? props.data.description_eng : props.data.description_pt }
                </Description>

                <TechStackBox>
                    <TechTitle>{language.tecnologies}</TechTitle>
                    <TechBox>
                        {props.data.tecnologiesId.map((tecId, index) => {
                            return (
                                <TechImg src={tecnologies[tecId].icon} title={tecnologies[tecId].name} key={index} />
                                
                                )
                            })}
                    </TechBox>
                </TechStackBox>

                <LinkBox>
                    <Link href={props.data.previewLink}>
                        <Icon src={linkIcon} />
                        <TextLink>{language.live_preview}</TextLink>
                    </Link>
                    <Link href={props.data.repositoryLink}>
                        <Icon src={githubIcon} />
                        <TextLink>{language.view_code}</TextLink>
                    </Link>
                </LinkBox>
            </ProjectContent>
        </ProjectContainer>
    )
}