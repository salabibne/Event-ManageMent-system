import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const navlinks = <>
     <li ><NavLink  to ="/">Home</NavLink></li>
     <li><NavLink to ="/service">Services</NavLink></li>
     <li><NavLink to ="/about">About</NavLink></li>
     <li><NavLink to ="/achivements">Achivements</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 p-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className=" normal-case  text-[#008080] font-extrabold text-4xl">CodeSal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
               <Link to ="/login"><button className="p-4 bg-[#008080] text-white  font-bold rounded-lg">Login</button></Link>
            </div>
        </div> 
    );
};

export default Navbar;