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
      showConfirmButton: false,
      background: theme.background,
      showCloseButton: true,
    });
  };

  return (
    <ProjectContainer
      onClick={() =>
        showModal(props.data.full ? props.data.full : props.data.image)
      }
      title="Clique para ver mais"
    >
      <TechImg
        src={tecnologies[props.data.tecnologiesId].icon}
        title={tecnologies[props.data.tecnologiesId].name}
      />

      <ProjectImage
        src={props.data.image}
        effect="blur"
        placeholderSrc={props.data.image}
        height={260}
      />

      {/* <TechBox>
        {props.data.tecnologiesId.map((tecId, index) => {
          return (
            
          );
        })}
      </TechBox> */}

      {/* <ProjectContent>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Title>{props.data.name}</Title>
          
        </div>
      </ProjectContent> */}
    </ProjectContainer>
  );
}
