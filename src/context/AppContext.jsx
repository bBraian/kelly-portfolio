import { createContext, useRef, useState } from "react";

import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

import { portuguese } from "../data/languages/portuguese";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [language, setLanguage] = useState(portuguese);
  const [theme, setTheme] = useState(dark);

  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  function scrollToSection(section) {
    let height = section.current.offsetTop - 80;
    window.scrollTo({ top: height, behavior: "smooth" });
  }

  function changeTheme() {
    theme === light ? setTheme(dark) : setTheme(light);
  }

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        changeTheme,
        theme,
        homeRef,
        skillsRef,
        projectsRef,
        scrollToSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
