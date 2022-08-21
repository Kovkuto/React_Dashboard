import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { List } from "./pages/List/List";
import { Login } from "./pages/Login/Login";
import { New } from "./pages/New/New";
import { Single } from "./pages/Single/Single";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<p>404 Page Not Found</p>} />
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List dataType="users" />} />
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New dataType="users" title="Add New User" />} />
          </Route>
          <Route path="products">
            <Route index element={<List dataType="products" />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New dataType="products" title="Add New Product" />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
