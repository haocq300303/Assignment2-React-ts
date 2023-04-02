import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="container mx-auto flex items-center gap-4">
      <img src={logo} className="w-[100px] h-[50px] object-cover" alt="logo" />
      <input type="text" className="grow" placeholder="search..." />
    </div>
  );
};

export default Header;
