// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactData } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";

export const App = () => {
  //? 1st Method :- (New Way)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout></AppLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/movie",
          element: <Movie></Movie>,
          loader: getMoviesData,
        },
        {
          path: "/movie/:movieID",
          element: <MovieDetails></MovieDetails>,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
          action: contactData,
        },
      ]
    },
  ]);



  //? wnd Method :- (Traditional Way)
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path= "/" element= {<Home></Home>}></Route>
  //       <Route path= "/about" element= {<About></About>}></Route>
  //       <Route path= "/movie" element= {<Movie></Movie>}></Route>
  //       <Route path= "/contact" element= {<Contact></Contact>}></Route>
  //     </Route>
  //   )
  // );

  return <RouterProvider router={router}></RouterProvider>
};
