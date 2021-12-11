import { useEffect, useState } from 'react';
import * as C from './styles';

function Project({descriptionn}) {

    const [description, setDescription] = useState("none");

        useEffect(() => {
            document.getElementById(descriptionn).style.display = description;
        })

    return( 
      <C.Project onClick={() => setDescription(description === "none" ? "block" : "none")} style={{backgroundImage: "url(https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format)"}}>
          <C.Container>
              <C.Description id={descriptionn}>{descriptionn}</C.Description>
          </C.Container>
      </C.Project>
    );
}

export default Project;