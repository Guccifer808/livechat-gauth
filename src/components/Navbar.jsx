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
    <div className="containerWrapper navbar fixed z-10 flex justify-between bg-base-100">
      <a className="btn-ghost btn text-xl normal-case">NightChat</a>
      {currentUser ? (
        <button className="btn" onClick={handleClick}>
          Logout
        </button>
      ) : null}
    </div>
  );
};

export default Navbar;
