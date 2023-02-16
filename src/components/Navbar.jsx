import React from "react";

const Navbar = () => {
  return (
    <div className="containerWrapper navbar flex justify-between bg-base-100">
      <a className="btn-ghost btn text-xl normal-case">NightChat</a>
      <button className="btn">Logout</button>
    </div>
  );
};

export default Navbar;
