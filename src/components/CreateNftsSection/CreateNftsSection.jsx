import img10 from '../../assets/image/img10.avif';
import img11 from '../../assets/image/img11.jpeg';
import img12 from '../../assets/image/img12.jpeg';
import avatar from '../../assets/image/man-avatar.jpg';

const CreateNftsSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-20'>
                <div className='flex items-center gap-8'>
                    <div className='space-y-8'>
                        <div className="relative ...">
                            <img src={img10} alt="" className='h-60 rounded-lg' />
                            <div className="absolute h-14 w-14 -right-6 -bottom-6 ..."><div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div></div>
                        </div>
                        <div className="relative ...">
                            <img src={img11} alt="" className='h-40 ps-16 rounded-lg' />
                            <div className="absolute h-14 w-14 -right-6 -bottom-6 ..."><div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div></div>
                        </div>
                    </div>
                    <div>
                        <div className="relative ...">
                            <img src={img12} alt="" className='h-52 rounded-lg' />
                            <div className="absolute h-14 w-14 -right-6 -bottom-6 ..."><div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='uppercase font-extrabold text-2xl mb-4'>Create and sell your NFTs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                    <a className="btn bg-[#3D00B7] text-white rounded-full mt-7">Sign Up Now</a>
                    <div className=" flex gap-5 mt-7"></div>
                </div>
            </div>
        </div>
    );
};

export default CreateNftsSection;