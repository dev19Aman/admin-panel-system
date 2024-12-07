import { themeColors } from "../../utills/color";
import Logo from "../../asset/image/avatar-1.png"

const Header = ({ title }) => {
  return (
    <header
      className={`bg-[#181A1B] backdrop-blur-md shadow-lg ${themeColors.headerBorder}`}
    >
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Title */}
        <h1 className={`${themeColors.textColor} text-2xl font-semibold`}>{title}</h1>

        {/* User Profile */}
        <div className="flex items-center space-x-4">
          <img
            src={Logo}
            alt="User"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className={`${themeColors.textColor} hidden sm:block text-sm font-medium`}>
         Aman
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
