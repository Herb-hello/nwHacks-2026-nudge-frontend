import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/home" element={<homePage />} />
      <Route path="/inventory" element={<inventoryPage />} />
      <Route path="/profile" element={<profilePage />} /> */}

      {/* Signup flow */}
      <Route path="/signup/1" element={<Signup1 />} />
      <Route path="/signup/2" element={<Signup2 />} /> 
      {/* <Route path="/signup/3" element={<signup3 />} />
      <Route path="/signup/4" element={<signup4 />} />
      <Route path="/signup/5" element={<signup5 />} />  */}

      {/* Recipes */}
      {/* <Route path="/recipes" element={<recipePage />} />
      <Route path="/recipes/:id" element={<recipe />} /> */}

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}