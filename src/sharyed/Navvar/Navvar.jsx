import "./Navvar.css";
import { NavLink } from "react-router-dom";

const Navvar = () => {
  const NavLi = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "navvaractive" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "pending" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "pending" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "pending" : ""
          }
        >
          My Project
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-xl mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLi}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl">
            <span className="text-[#3636FF]">Anik</span>
            Hassan
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">{NavLi}</ul>
        </div>
        <div className="navbar-end">
          <a className="bg-[#2e2e4f] text-white py-2 px-4 rounded-lg  font-semibold cursor-pointer text-xl hover:bg-[#3636FF]">
            ${`Let's Talk`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navvar;
