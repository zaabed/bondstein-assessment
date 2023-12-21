
const Navbar = () => {
    return (

        <div className="">
            <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <li><a>Marketplace</a></li>
                            <li><a>Resource</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-extrabold text-[#3D00B7]">NFTERS</a>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li><a>Marketplace</a></li>
                        <li><a>Resource</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-4 mb-3">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 rounded-full md:w-auto" />
                    <a className="btn bg-[#3D00B7] text-white rounded-full">Upload</a>
                    <a className=" btn rounded-full text-[#3D00B7] text-nowrap  ">Connect Wallet</a>
                </div>
            </div>
            < hr />
        </div>

    );
};

export default Navbar;