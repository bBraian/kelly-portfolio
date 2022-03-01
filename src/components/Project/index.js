import { useEffect, useState } from 'react';
import * as C from './styles';

function Project({descriptionn, projectImage}) {

    const [description, setDescription] = useState("none");

        useEffect(() => {
            document.getElementById(descriptionn).style.display = description;
        })

    return( 
      <C.Project onMouseEnter={() => setDescription(description === "none" ? "block" : "none")} onMouseLeave={() => setDescription(description === "none" ? "block" : "none")} style={{backgroundImage: `url(${projectImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', padding: '20px'}}>
          <C.Container>
              <C.Description id={descriptionn}>{descriptionn}</C.Description>
          </C.Container>
      </C.Project>
    );
}

export default Project;