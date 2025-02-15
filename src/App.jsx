import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AppContextProvider } from "./context/AppContext";

export function App() {
  return (
    <AppContextProvider>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </AppContextProvider>
  )
}
