import logo from "./../assets/Images/logo.png";

function Header() {
  return (
    <div>
      <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
    </div>
  );
}

export default Header;
