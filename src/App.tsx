import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./layout/Layout.tsx";
import Inventory from "./pages/Inventory.tsx";
import Login from "./pages/Login.tsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="contact_us" />
        <Route path="login" element={<Login />} />
      </Routes>
    </Layout>
  );
};

export default App;
