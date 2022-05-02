import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as C from './styles';

function Project({projectImage}) {

    var descriptionn = "Clique para ver a imagem completa";

    const [description, setDescription] = useState("none");

        useEffect(() => {
            document.getElementById(projectImage).style.display = description;
        })

    const showModal = (img) => {
        Swal.fire({
            imageUrl: img,
            Width: 900,
            showConfirmButton: false,
            background: 'transparent'
        })
    }

    return( 
      <C.Project onClick={() => showModal(projectImage)} onMouseEnter={() => setDescription(description === "none" ? "block" : "none")} onMouseLeave={() => setDescription(description === "none" ? "block" : "none")} style={{backgroundImage: `url(${projectImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '20px'}}>
          <C.Container>
              <C.Description id={projectImage}>{descriptionn}</C.Description>
          </C.Container>
      </C.Project>
    );
}

export default Project;