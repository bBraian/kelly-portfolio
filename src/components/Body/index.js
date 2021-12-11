import * as C from './styles';
import Project from '../Project';
import corel from '../../images/linguagens/corel.png';
import davinciresolve from '../../images/linguagens/davinciresolve.png';

function Body() {
    return(
        <C.Container>

        <C.AboutMe>
            <C.Title>Sobre <C.Tcolor>mim</C.Tcolor></C.Title>
            <C.TextAbout>
            <p style={{margin: '0 0 10px'}}>I have about than two years of work experience in full-stack development and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
</p>
<p style={{margin: '0 0 10px'}}>
On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills.
</p>
<p style={{margin: '0 0 10px'}}>
In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
</p>
Below is a list of my current technical skills:
            </C.TextAbout>
            <C.Tecnologies>
                
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