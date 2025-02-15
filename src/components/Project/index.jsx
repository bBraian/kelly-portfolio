import {
  Description,
  ProjectContainer,
  ProjectContent,
  ProjectImage,
  TechBox,
  TechImg,
  Title,
} from "./styles";
import "react-lazy-load-image-component/src/effects/blur.css";

import { english } from "../../data/languages/english";

import Swal from "sweetalert2";

import { tecnologies } from "../../data/tecnologies";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Project(props) {
  const { language, theme } = useContext(AppContext);
  console.log(theme);

  const showModal = (img) => {
    Swal.fire({
      imageUrl: img,
      Width: 900,
      showConfirmButton: false,
      background: theme.background,
    });
  };

  return (
    <ProjectContainer onClick={() => showModal(props.data.image)}>
      <ProjectImage
        src={props.data.image}
        effect="blur"
        placeholderSrc={props.data.image}
        height={260}
      />

      <ProjectContent>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Title>{props.data.name}</Title>
          <TechBox>
            {props.data.tecnologiesId.map((tecId, index) => {
              return (
                <TechImg
                  src={tecnologies[tecId].icon}
                  title={tecnologies[tecId].name}
                  key={index}
                />
              );
            })}
          </TechBox>
        </div>
      </ProjectContent>
    </ProjectContainer>
  );
}
