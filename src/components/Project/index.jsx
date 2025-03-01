import {
  ProjectContainer,
  ProjectContent,
  ProjectImage,
  TechImg,
} from "./styles";
import "react-lazy-load-image-component/src/effects/blur.css";

import Swal from "sweetalert2";

import { tecnologies } from "../../data/tecnologies";

import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export function Project(props) {
  const { language, theme } = useContext(AppContext);
  console.log(theme);

  const showModal = (img) => {
    // Show loading modal
    const loadingModal = Swal.fire({
      title: "Carregando...",
      didOpen: () => {
        Swal.showLoading(); // Show loading spinner
      },
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    // Preload the image
    const image = new Image();
    image.src = img;
    image.onload = () => {
      // Close loading modal
      Swal.close();

      // Show the actual modal with the image
      Swal.fire({
        imageUrl: img,
        showConfirmButton: false,
        background: theme.background,
        showCloseButton: true,
      });
    };

    image.onerror = () => {
      Swal.fire({
        title: "Error",
        text: "Falha ao carregar imagem.",
        icon: "error",
        background: theme.background,
      });
    };
  };

  return (
    <ProjectContainer
      onClick={() =>
        showModal(props.data.full ? props.data.full : props.data.image)
      }
      title="Clique para ver mais"
    >
      <ProjectImage
        src={props.data.image}
        effect="blur"
        placeholderSrc={props.data.image}
        height={260}
      />

      <ProjectContent>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          {/* <Title>{props.data.name}</Title> */}
          {props.data.tecnologiesId.map((tecId, index) => {
            const tecnologySvg = tecnologies.filter(
              (tec) => tec.id == tecId
            )[0];
            console.log(tecnologySvg);
            return (
              <TechImg
                key={index}
                src={tecnologySvg.icon}
                title={tecnologySvg.name}
              />
            );
          })}
        </div>
      </ProjectContent>
    </ProjectContainer>
  );
}
