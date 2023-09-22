// RouterComponent.js (React Router version 6)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import View from "../pages/View";
// import About from './components/About';
// import Contact from './components/Contact';
// import Login from './components/Login';
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { UserProvider } from "@/contexts/UserContext";
import { FileProvider } from "@/contexts/FileContext";

function RouterComponent() {
  return (
    <Router>
      <UserProvider>
        <FileProvider>
          <main className="relative">
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/view/:documentKey" element={<View />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <section className="bg-white absolute bottom-0  py-2">
              <p className="text-slate-600 text-xs font-medium text-center">
                Made with ❤️ by Pedro Marques
              </p>
            </section>
          </main>
        </FileProvider>
      </UserProvider>
    </Router>
  );
}

export default RouterComponent;
