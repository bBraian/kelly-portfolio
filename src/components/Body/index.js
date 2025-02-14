import * as C from './styles';
import Project from '../Project';
import corel from '../../images/linguagens/corel.png';
import davinciresolve from '../../images/linguagens/davinciresolve.png';
import ai from '../../images/linguagens/ai.png';
import ps from '../../images/linguagens/ps.png';
import lr from '../../images/linguagens/lr.png';
import id from '../../images/linguagens/id.png';

import acai from '../../images/Açaí.png';
import acai2 from '../../images/Açaí2.png';
import hamburguer from '../../images/hamburguer2.png';
import suco from '../../images/suco.png';
import meu_acai from '../../images/meu_acai.png';
import cartaz_filme from '../../images/A1.jpg';

import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';
import p6 from '../../images/p6.jpg';
import p7 from '../../images/p7.jpg';

function Body() {

    return (
        <C.Container>

            <C.AboutMe>
                <C.Title>Sobre <C.Tcolor>mim</C.Tcolor></C.Title>
                {/* <C.TextAbout>
                    <p style={{margin: '0 0 10px'}}>Oii eu sou a Kelly ratazana topeira de boeiro.
                    </p>
                    <p style={{margin: '0 0 10px'}}>
                    Estou estudando design de photoshop de ratazanas de bueiro.
                    </p>
                    <p style={{margin: '0 0 10px'}}>
                    Estou aprendendo a como desenhar sombrancelhas de ratazanas sem orelhas
                    </p>
                    Abaixo veja a lista das minhas habilidades técnicas
                </C.TextAbout> */}
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
                <Project projectImage={p1}></Project>
                <Project projectImage={p2}></Project>
                <Project projectImage={p3}></Project>
                <Project projectImage={p4}></Project>
                <Project projectImage={p5}></Project>
                <Project projectImage={p6}></Project>
                <Project projectImage={p7}></Project>

                <Project projectImage={acai}></Project>
                <Project projectImage={acai2}></Project>
                <Project projectImage={suco}></Project>
                <Project projectImage={hamburguer}></Project>
                <Project projectImage={meu_acai}></Project>
                <Project projectImage={cartaz_filme}></Project>
            </C.ContainerProjects>
        </C.Container>
    );
}

export default Body;