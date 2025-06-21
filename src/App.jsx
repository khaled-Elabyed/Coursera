import React from "react";
import {createBrowserRouter , createRoutesFromElements , RouterProvider , Route , Outlet,} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import CourseDetails from "./CourseDetails";
import Card from "./Card";
import Interface from "./Interface";
import Login from "./Login";
import Signup from "./Signup";
import Stripcontainer from "./Stripcontainer";
import PayOne from "./PayOne";
import StripcontainerForOne from "./StripcontainerForOne";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route path="/Home" element={<Home />} ></Route>
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/cart" element={<Stripcontainer />} />
          <Route path="/pay-one" element={<StripcontainerForOne />} />
        </Route>
        <Route index element={<Interface />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
