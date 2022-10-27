import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import LoginNew from "./pages/Login";
import Navbar from "./pages/Navbar";
import New from "./pages/New";
import Nomatch from "./pages/Nomatch";
import Order from "./pages/Order";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Protected from "./pages/Protected";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users";
import AuthProvider from "./store/AuthProvider";
const LazyAbout = React.lazy(() => import("./pages/About"));

function App() {
  return (
    // <MultiselectDemo/>
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading....">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="order-summary" element={<Order />} />
          <Route path="products" element={<Products />}>
            <Route index element={<Featured />} />
            <Route path="featured" element={<Featured />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route
            path="profile"
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route path="login" element={<LoginNew />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
