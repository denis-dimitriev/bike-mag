import "./App.scss";

import { Layout } from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Header } from "./templates/header/Header";
import Homepage from "./pages/homepage/Homepage";

export const App = () => {
  return (
    <Layout>
      <div className="app-container">
        <Header />
        <div className="container-body">
          <Routes>
            <Route index element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </Layout>
  );
};
