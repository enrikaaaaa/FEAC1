import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./pages/About/About";
import AuthLayout from "./components/layout/AuthLayout";
import BookNow from "./pages/BookNow/BookNow";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/LoginRegister/Login";
import { ROUTES } from "./routes/consts";
import React from "react";
import Register from "./pages/LoginRegister/Register";
import RootLayout from "./components/layout/RootLayout";
import SearchCategory from "./pages/SearchCategory/SearchCategory";
import Services from "./pages/Services/Services";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.ABOUT,
        element: <About />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
      {
        path: ROUTES.BOOK_NOW,
        element: <BookNow />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
