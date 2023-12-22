import filter from '../../assets/image/filter.png';
import banner from '../../assets/image/banner-img-1.avif';
import ethereum from '../../assets/image/ethereum-50.png';
import man from '../../assets/image/man-avatar.jpg';

const DiscoverNfts = () => {
    return (
        <div className="bg-[rgb(246,246,247)] p-14  mt-20">
            <div className="max-w-screen-xl mx-auto">

                <h1 className="uppercase font-extrabold text-2xl">Discover more NFTs</h1>
                <div className="flex justify-between mt-6">

                    <div className="grid lg:grid-cols-7 sm:grid-cols-1 gap-3">
                        <p className=" text-center p-1 rounded-3xl bg-[#3D00B7] text-white ">All Categories</p>
                        <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">Art</p>
                        <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">Celebrities</p>
                        <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">Gaming</p>
                        <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">Sport</p>
                        <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">Music</p>
                        <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">Crypto</p>
                    </div>

                    <div className='flex items-center bg-[#DCDCDC] rounded-3xl p-1 gap-3'>
                        <img src={filter} alt="" className='h-4' />
                        <p className="text-center  font-bold  ">All Filters</p>
                    </div>

                </div>

                <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 mt-10'>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                    <div className="card w-80 bg-base-100 shadow-xl">
                        <div className="relative ...">
                            <figure><img className='h-60 rounded-3xl p-4 ' src={banner} alt="" /></figure>
                            {/* <img src={banner} alt="" className='h-60 rounded-lg p-4' /> */}
                            <div className="absolute h-14 w-14 left-6 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-12 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-20 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                            <div className="absolute h-14 w-14 left-28 -bottom-4 ..."><div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={man} />
                                </div>
                            </div></div>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title font-bold">
                                ArtCrypto
                            </h2>
                            <div className='flex justify-between items-center'>
                                <div className="flex items-center gap-2">
                                    <img src={ethereum} alt="" className='h-5 text-[#00AC4F]' />
                                    <p className='text-[#00AC4F]'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-[#00AC4F]'>1 of 321</p>
                                </div>
                            </div>
                        </div>
                        <hr className='m-5' />
                        <div className='flex justify-between mb-6 p-5'>
                            <p className=" text-center p-1 rounded-3xl bg-[#DCDCDC] font-bold ">3h 50m 2s left</p>
                            <p className=" text-center rounded-3xl font-medium ">Place a bid</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-10'>
                    <p className="btn text-[#3D00B7] border-2 rounded-full">More NFTs</p>
                </div>
            </div>
        </div>
    );
};

export default DiscoverNfts;