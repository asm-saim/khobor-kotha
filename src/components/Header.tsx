import Image from "next/image";
import Navlinks from "./Navlinks";

const currDate = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});
console.log(currDate);

const Header = () => {
  return (
    <header>
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-center px-4">
        <div className="flex items-center gap-2">
          <Image src="/headerLogo.webp" width={45} height={45} alt="header img" />

          <div>
            <div className="text-2xl font-bold text-red-700">Bangla News 24</div>
            <div className="text-xs text-gray-600">{currDate}</div>
          </div>
        </div>

        <div className="absolute right-4 flex gap-3">
          <button>সাইন ইন</button>
          <button className="btn bg-red-700 text-white">সাইন আপ</button>
        </div>
      </div>
      <Navlinks></Navlinks>
    </header>
  );
};

export default Header;
