import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./component/Footer";
import Header from "./component/Header";
import RestaurantList from "./component/RestaurantList";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./component/About";
import Error from "./component/Error";
//import Contact from "./component/Contact";
import RestaurantMenuDetails from "./component/RestaurantMenuDetails";
import Login from "./component/Login";
//import Instamart from "./component/Instamart";

/* react redux implementation in application */
import { Provider } from "react-redux";
import store from "./utils/Redux/store";
import Cart from "./component/Cart";

/*
    Food Junction application - layout 
    1. Header
        -Login
        - Nav items (Right Side)
        - cart
    2. Body
        -Search bar 
        -restaurantList 
            - restaurantcare 
             -image
             -name
             -rating
             -Cusines
    3. footer
        - links 
        - copyright

*/

{
  /* <h1>This application using swiggy api</h1> */
}

// Code for lazy loading the below component in to our react application -
// Lazy loading reduces the build file size and increases the performance of web application
const Instamart = lazy(() => import("./component/Instamart"));
const About = lazy(() => import("./component/About"));
const Contact = lazy(() => import("./component/Contact"));

function AppLayout() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      {/* <RestaurantList/> */}
      <Footer date={new Date()} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <RestaurantList />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restaurantId",
        element: <RestaurantMenuDetails />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
