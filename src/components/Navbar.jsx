import logo from "../assets/logo-nchat.png";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, signout } = UserAuth();

  //signout
  const handleClick = async (event) => {
    try {
      await signout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navbar fixed z-10 bg-base-100">
      <div className="containerWrapper flex justify-between ">
        {/* <a className="btn-ghost btn text-xl normal-case">NightChat</a> */}
        <img src={logo} />
        {currentUser ? (
          <button className="btn" onClick={handleClick}>
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
