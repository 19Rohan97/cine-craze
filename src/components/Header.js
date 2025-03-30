import Navbar from "./Navbar";
import Logo from "./Logo";
import User from "./User";

export default function Header() {
  return (
    <header className="bg-cc4 w-full p-4 flex justify-between gap-x-20 lg:min-h-[calc(100vh-32px-32px)] lg:max-w-24 lg:px-8 lg:py-9 lg:rounded-[20px]  lg:flex-col lg:fixed">
      <div className="flex w-[calc(100%-80px-24px)] lg:w-full gap-20 lg:flex-col lg:gap-[75px] justify-center items-center">
        <Logo />
        <Navbar />
      </div>

      <User />
    </header>
  );
}
