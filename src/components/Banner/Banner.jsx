import img1 from '../../assets/image/banner-img-1.avif';
import img6 from '../../assets/image/img6.jpeg';
import img4 from '../../assets/image/img4.webp';



const Banner = () => {
    return (


        <div className='max-w-screen-xl mx-auto mt-16 grid lg:grid-cols-2 sm:grid-cols-1 gap-x-96 gap-10'>

            <div>
                <h1 className="uppercase font-extrabold text-3xl text-[#000000]">Discover, and collect  Digital Art  NFTs </h1>
                <p className="mt-4">Digital marketplace for crypto collectibles and  non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
                <a className="btn bg-[#3D00B7] text-white rounded-full mt-7">Explore Now</a>
                <div className=" flex gap-5 mt-7">
                    <div>
                        <h3 className="font-extrabold text-2xl">98K+</h3>
                        <p>Artwork</p>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-2xl">12K+</h3>
                        <p>Auction</p>
                    </div>
                    <div>
                        <h3 className="font-extrabold text-2xl">15K+</h3>
                        <p>Artist</p>
                    </div>
                </div>
            </div>

            <div className="relative">
                {/* <!-- Background image --> */}
                <img src={img6} alt="Background Image" className="w-full h-full object-cover rounded-3xl" />

                {/* <!-- Overlay image --> */}
                <img src={img4} alt="Overlay Image" className="absolute top-0 right-10 w-full h-72 object-cover rounded-3xl" />

                <img src={img1} alt="Overlay Image" className="absolute top-0 right-20 w-full h-64 object-cover rounded-3xl " />
                <div className="absolute h-14 w-14 -left-28 top-28 bg-[#FFE0D4] rounded-full p-10 ...">
                </div>

                {/* <!-- Text overlay --> */}
                <h1 className="absolute top-14 left-20 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold ">
                    Abstr Gradient NFT
                    <div className='flex justify-between mt-4'>
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <p>Arkhan17</p>
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Banner;