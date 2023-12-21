import img1 from '../../assets/image/banner-img-1.avif';


const Banner = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-16">

            <div className='flex justify-between'>

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

                <div>
                    <img src={img1} alt="" className='rounded-lg h-64' />
                </div>

            </div>

        </div>
    );
};

export default Banner;