import facebook from '../../assets/image/facebook.png';
import twitter from '../../assets/image/twitter.gif';
import linkedin from '../../assets/image/linkedin.png';

const Footer = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <footer className="footer text-base-content">
                <nav>

                    <h3 className="font-extrabold text-[#000000] text-2xl">NFTERS</h3>
                    <p>The world’s first and largest digital marketplace for <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>


                    <div className="grid grid-flow-col gap-4 mt-5">
                        <img src={facebook} alt="" className='h-12' />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>

                </nav>
                <nav>
                    <header className="uppercase font-bold">Market Place</header>
                    <a className="link link-hover">All NFTs</a>
                    <a className="link link-hover">New</a>
                    <a className="link link-hover">Art</a>
                    <a className="link link-hover">Sports</a>
                    <a className="link link-hover">Utility</a>
                    <a className="link link-hover">Music</a>
                    <a className="link link-hover">Domain Name</a>
                </nav>
                <nav>
                    <header className="uppercase font-bold">My Account</header>
                    <a className="link link-hover">Profile</a>
                    <a className="link link-hover"> Favorite</a>
                    <a className="link link-hover">  My Collections</a>
                    <a className="link link-hover">  Settings</a>
                </nav>
                <form>
                    <header className="uppercase font-bold">Stay in the loop</header>
                    <p>Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p>
                    <fieldset className="form-control w-80">

                        <div className="join mt-5">
                            <input type="text" placeholder="Enter your email address" className="input input-bordered join-item rounded-3xl" />
                            <button className="btn btn-primary join-item rounded-3xl">Subscribe Now</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;