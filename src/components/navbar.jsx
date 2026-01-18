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
    `w-8 h-8 cursor-pointer transition-colors duration-200 ${
      isActive(path) ? "text-[#FFB200]" : "text-[#55525B]"
    }`;

  return (
    <div className="w-full px-4 pb-0 pt-2">
      <nav className="w-full bg-white rounded-b-[40px] overflow-hidden">
        <div className="flex justify-center">
          <div
            className="w-[430px] border-t border-gray-200"
            style={{ borderTopWidth: "1px" }}
          />
        </div>
        <div className="h-14 flex justify-around items-center max-w-[430px] mx-auto px-8">
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
    </div>
  );
};

export default Navbar;
