import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, ClipboardList, ChefHat, User } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleIconClick = (path) => {
    navigate(path);
  };

  const isActive = (path) => location.pathname === path;

  const iconClass = (path) =>
    `w-6 h-6 cursor-pointer transition-colors duration-200 ${
      isActive(path) ? "text-[#FFB200]" : "text-[#55525B]"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full h-14 bg-white shadow-sm">
      <div className="h-full flex justify-center items-center gap-20 px-12">
        <Home
          className={iconClass("/home")}
          onClick={() => handleIconClick("/home")}
        />
        <ClipboardList
          className={iconClass("/inventory")}
          onClick={() => handleIconClick("/inventory")}
        />
        <ChefHat
          className={iconClass("/recipes")}
          onClick={() => handleIconClick("/recipes")}
        />
        <User
          className={iconClass("/profile")}
          onClick={() => handleIconClick("/profile")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
