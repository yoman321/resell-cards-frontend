import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout.tsx";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" />
        <Route path="/inventory" />
        <Route path="contact_us" />
        <Route path="login" />
      </Routes>
    </Layout>
  );
};

export default App;
