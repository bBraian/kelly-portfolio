import * as C from './styles';
import fotoPerfil from '../../images/kelly.png';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import React, { useContext } from 'react';


function Header({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

    return (
      <C.Container>
        <C.Image>
          <img src={fotoPerfil} alt="Perfil" style={{width: 'auto', height: 'auto', maxWidth: '86px', maxHeight: '86px'}} />
        </C.Image>
        <C.Name>Kelly Joner</C.Name> 
        <C.Button>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </C.Button>
      </C.Container>
    );
  }
  
  export default Header;