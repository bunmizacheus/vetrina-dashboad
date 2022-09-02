import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@mui/private-theming";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextObjProvider from "./store/app-context";
import { DrawerHeader } from "./utils/helperFunction";
import { appRoutes } from "./Routes/appRoutes";

const App: React.FC = () => {
  return (
    <ContextObjProvider>
      <DrawerHeader />
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            {appRoutes.map((route, i) => (
              <Route
                path={`${route.path}`}
                element={<route.element />}
                key={i}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ContextObjProvider>
  );
};

export default App;
