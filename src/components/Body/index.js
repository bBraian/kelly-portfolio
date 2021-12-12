import * as C from './styles';
import Project from '../Project';
import corel from '../../images/linguagens/corel.png';
import davinciresolve from '../../images/linguagens/davinciresolve.png';
import ai from '../../images/linguagens/ai.png';
import ps from '../../images/linguagens/ps.png';
import lr from '../../images/linguagens/lr.png';
import id from '../../images/linguagens/id.png';

function Body() {
    return(
        <C.Container>

        <C.AboutMe>
            <C.Title>Sobre <C.Tcolor>mim</C.Tcolor></C.Title>
            <C.TextAbout>
            <p style={{margin: '0 0 10px'}}>Oii eu sou a Kelly ratazana topeira de boeiro.
</p>
<p style={{margin: '0 0 10px'}}>
Estou estudando design de photoshop de ratazanas de bueiro.
</p>
<p style={{margin: '0 0 10px'}}>
Estou aprendendo a como desenhar sombrancelhas de ratazanas sem orelhas
</p>
Abaixo veja a lista das minhas habilidades técnicas
            </C.TextAbout>
            <C.Tecnologies>
                
                    <C.Tecnology>
                        <img src={id} title="corel" alt="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={ai} title="corel" alt="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={ps} title="corel" alt="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={lr} title="corel" alt="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={corel} title="corel" alt="corel" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                    <C.Tecnology>
                        <img src={davinciresolve} title="davinciresolve" alt="davinciresolve" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}}/>
                    </C.Tecnology>
                
            </C.Tecnologies>
        </C.AboutMe>
            

            <C.Title>Projetos</C.Title>
            <C.ContainerProjects>
                <Project descriptionn="A project made with react typescript using styled-components"></Project>
                <Project descriptionn="That's my old portfolio made only with javascript, html and css"></Project>
                <Project descriptionn="Todo is an react-app made with typescript. Is the convencional list of things to do. You can create, and mark as done"></Project>
                <Project descriptionn="This project was made in React during a challenge called '5 Projetos em 5 Dias' by B7Web."></Project>
                <Project descriptionn="This is a project of a digital menu made whith php whitout framework"></Project>
                <Project descriptionn="Is a project of the famous and known snake game inspired by the old model made in javascript."></Project>
            </C.ContainerProjects>
        </C.Container>
    );
}

export default Body;