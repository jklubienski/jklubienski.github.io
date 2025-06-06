import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/HomePage";
import Support from "./pages/SupportPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout title="Support">
              <Support />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
