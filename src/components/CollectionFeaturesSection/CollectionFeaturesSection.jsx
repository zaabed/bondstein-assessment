import img from '../../assets/image/img2.jpeg';
import avatar from '../../assets/image/man-avatar.jpg';
import img6 from '../../assets/image/img6.jpeg';
import img7 from '../../assets/image/img7.avif';
import img8 from '../../assets/image/img8.jpg';
import img9 from '../../assets/image/banner-img-1.avif';
import img10 from '../../assets/image/img4.webp';


const CollectionFeaturesSection = () => {
    return (
        <div className="bg-[rgb(246,246,247)] p-14  mt-20">
            <div className="max-w-screen-xl mx-auto">
                <h3 className="font-bold text-2xl text-[#000000] uppercase mb-10">Collection Featured NFTs</h3>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-10'>
                    <div>
                        <div className='flex gap-3'>
                            <div>
                                <img src={img} alt="" className='rounded-lg h-56' />
                            </div>
                            <div className='space-y-4'>
                                <img src={img6} alt="" className='rounded-lg h-16 w-24' />
                                <img src={img7} alt="" className='rounded-lg h-16 w-24' />
                                <img src={img8} alt="" className='rounded-lg h-16 w-24' />
                            </div>
                        </div>
                        <h6 className='font-bold mt-3 mb-2'>Amazing Collection</h6>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={avatar} />
                                    </div>
                                </div>
                                <div>
                                    <p>by Arkhan</p>
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-center ps-5 pe-5'>Place a bid</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            <div>
                                <img src={img9} alt="" className='rounded-lg h-56' />
                            </div>
                            <div className='space-y-4'>
                                <img src={img6} alt="" className='rounded-lg h-16 w-24' />
                                <img src={img7} alt="" className='rounded-lg h-16 w-24' />
                                <img src={img8} alt="" className='rounded-lg h-16 w-24' />
                            </div>
                        </div>
                        <h6 className='font-bold mt-3 mb-2'>Amazing Collection</h6>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={avatar} />
                                    </div>
                                </div>
                                <div>
                                    <p>by Arkhan</p>
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-center ps-5 pe-5'>Place a bid</p>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            <div>
                                <img src={img10} alt="" className='rounded-lg h-56' />
                            </div>
                            <div className='space-y-4'>
                                <img src={img6} alt="" className='rounded-lg h-16 w-24' />
                                <img src={img7} alt="" className='rounded-lg h-16 w-24' />
                                <img src={img8} alt="" className='rounded-lg h-16 w-24' />
                            </div>
                        </div>
                        <h6 className='font-bold mt-3 mb-2'>Amazing Collection</h6>
                        <div className='flex items-center justify-between'>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={avatar} />
                                    </div>
                                </div>
                                <div>
                                    <p>by Arkhan</p>
                                </div>
                            </div>
                            <div className="">
                                <p className='font-semibold text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-center ps-5 pe-5'>Place a bid</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionFeaturesSection;