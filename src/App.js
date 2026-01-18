import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import RecipePage from "./pages/RecipePage";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";
import Signup3 from "./pages/Signup3";
import Signup4 from "./pages/Signup4";
import Signup5 from "./pages/Signup5";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      {/* <Route path="/profile" element={<profilePage />} /> */}

      {/* Signup flow */}
      <Route path="/signup/1" element={<Signup1 />} />
      <Route path="/signup/2" element={<Signup2 />} /> 
      <Route path="/signup/3" element={<Signup3 />} />
      <Route path="/signup/4" element={<Signup4 />} />
      <Route path="/signup/5" element={<Signup5 />} /> 

      {/* Recipes */}
      <Route path="/recipes" element={<RecipePage />} />
      {/* <Route path="/recipes/:id" element={<recipe />} />  */}

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}