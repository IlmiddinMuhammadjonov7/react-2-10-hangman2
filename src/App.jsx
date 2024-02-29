import React from "react";
import GlobalStyles from "./general/components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./general/utils/theme";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import Game from "./pages/game/Game";
import Category from "./pages/category/Category";
import HowTo from "./pages/how-to/HowTo";
import Home from "./pages/home/Home";

const App = () => {
  // Routerlar yani pagega o'tish ucun
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/how-to", element: <HowTo /> },
    { path: "/category", element: <Category /> },
    { path: "/game", element: <Game /> },
  ]);
  return (
    <>
      {/* Ushbu joyda theme dan foydalanyapmiz */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* Routerni ishlatish */}
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
