import img from '../../assets/image/img2.jpeg';
import img3 from '../../assets/image/img3.jpg';
import img4 from '../../assets/image/img4.webp';
import img5 from '../../assets/image/img5.jpg';
import verified from '../../assets/image/verified.png';
import avatar from '../../assets/image/man-avatar.jpg';

const TopCollectionSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto mt-20">
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-20'>

                <div className='space-y-5'>
                    <img src={img} alt="" className='rounded-lg h-80' />
                    <div className='flex items-center justify-between '>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div>
                                <h6 className='font-bold'>The Futr Abstr</h6>
                                <p>10 in the stock</p>
                            </div>
                        </div>
                        <div className="">
                            <p>Highest Bid</p>

                            <div className='flex items-center gap-2 font-bold'>
                                <div>
                                    <img className='h-5' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nN2ba4hNURTHf8MMjcdgMFKDUl4llPFBCKEkQhkiShQJ+eJRPnl9UKSID4gPfCKFSB5J8iaPJkxkkGbKa5qYYUaerVq3Tqezj3PPveecfe6/Vt277z57r9/t7rPXXutciFdjgceO90+0rSDVCXgBNDna5HUd0IUC1D7grwewtO2lwDQe+O0DLJ9NpkDUGXilYCZgsTdAVwpAhxxQfsBiB0m5pgF/sgAWm0FK1Q145wH0P+AGoJwU6rgHTBBgsWOkTLMNIEGBxeaREvUC3ucB+BPQhxTopA9ENsBiZ7Bci/4DkC2w2EIsVV+gMQJg6VOJhTofwPkwwGKXgCIs0vKAjocFFluGJarM0vGwwF+AASSsIuBiFk7nAix2Nemf9posHc4VWGx1UrADgeYEgL8Bg+KGbQdcD+FsPoDFbgPt4wTeENLRfAGLrY8Ldhjw3QLgNmB41LDFwP0cnMwnsNgjoMS2u/LfCIEjv2svAH5ZBCy+VBPDGj7pkauKG/gKMJIYNQY4lwDwTWACCWpclntyWOB7wBQs0lQtlOUb+Jmu00Ri6HJgFdDPJwJbrAWyXIHrdCwZ00viw1qgJxFqhzrTCuwBehv6legX0xACuEGvNe2vvXXuVu2/jQg1WNdSxrmvwFagzKdEutGV+jEBN2pfucZLZTrXV9e6jvwgUQTMAZ46Jv6ssW2pTxViu56u3MDN+pn08VKpjv3ZMd9T9SHWdd0OWAK8djhSD6z0+TlWALMc72dpm5dKdKx6x/ivdU7Tuo5FJcAK13p9q21hjnBFeld+6RjvI7AJ6IhF6gSsAz7ksKVM1QOBc11vSbJu3AG4C1zQSMtL3fVu3uJw/BYwyWfcSdon079Fx5CxvDRGfbirPkWmHo7tQGLpU8AQQ98++uxGmyu/XOXoU6Vtmc/b9BpTTWmIzpmJ41t9vpS8aZVr3/wJHPapDkhq9ajjlJX5opyO/9I+pjRspc7x0zW3+JJY7feHPrJguusONZyy5NQzwiey22nIsJwgRnUFan1Cx836MIuXRmtV8LS+9lJnHcMUetYmcSMbrilTUywcZivx2uLcJut2FBaXR98G2JO99l6TLSVhHQ3gZCYcrDbsvQ8DjnEESwKOmoAOu6v6Z7O4rsbnYBG7Bml1L6qMR7Pm0qzS/AiBJRFgpQ5EALwfi9UReJBH4Cc+Z2xr1N91WA8L3KQl2VRopk+iPgiwXDuXlGl3DsC7SKGKgRshgO9EfcaNUpUaUwcFbrThSZ1cNcVVcTQBy/8eplMg2h4AONKEetyStOplH+BrcT+kEocq9JzrBn6vD6YWpCZq6jaj59oWm/4BY+sFTFItx4UAAAAASUVORK5CYII=" />
                                </div>
                                <div>
                                    <h6>0.25 ETH</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='space-y-5'>

                    <div className='flex gap-5 '>
                        <div>
                            <img src={img3} alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <div><h6 className='font-bold'>The Futr Abstr</h6></div>
                            <div className='flex items-center gap-3 mt-3'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={avatar} />
                                    </div>
                                </div>
                                <div className="">
                                    <p className='border-2 rounded-lg text-[#00AC4F] p-1'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-nowrap'>1 of 8</p>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p className=' bg-[#3D00B7] text-white rounded-full text-center p-1'>Place a bid</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div>
                            <img src={img4} alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <div><h6 className='font-bold'>The Futr Abstr</h6></div>
                            <div className='flex items-center gap-3 mt-3'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={avatar} />
                                    </div>
                                </div>
                                <div className="">
                                    <p className='border-2 rounded-lg text-[#00AC4F] p-1'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-nowrap'>1 of 8</p>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p className='font-semibold text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-center p-1'>Place a bid</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div>
                            <img src={img5} alt="" className='rounded-lg' />
                        </div>
                        <div>
                            <div><h6 className='font-bold'>The Futr Abstr</h6></div>
                            <div className='flex items-center gap-3 mt-3'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={avatar} />
                                    </div>
                                </div>

                                <div className="">
                                    <p className='border-2 rounded-lg text-[#00AC4F] p-1'>0.25ETH</p>
                                </div>
                                <div>
                                    <p className='text-nowrap'>1 of 8</p>
                                </div>
                            </div>
                            <div className='mt-3'>
                                <p className='font-semibold text-[#3D00B7] border-2 border-[#3D00B7] rounded-full text-center p-1'>Place a bid</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <h6 className='uppercase font-extrabold'>Top Collections over </h6>
                    <p className='text-[#3D00B7]'>Last 7 days</p>

                    <div className='space-y-5'>
                        <div className='flex items-center gap-4'>
                            <p className='font-bold'>1</p>
                            <div className="relative avatar">
                                <div className="w-14 rounded-full">
                                    <div className="absolute top-0 -right-1.5 h-7"><img src={verified} alt="" /></div>
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>CryptoFunks</p>
                                <p className='flex items-center'><img className='h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nN2ba4hNURTHf8MMjcdgMFKDUl4llPFBCKEkQhkiShQJ+eJRPnl9UKSID4gPfCKFSB5J8iaPJkxkkGbKa5qYYUaerVq3Tqezj3PPveecfe6/Vt277z57r9/t7rPXXutciFdjgceO90+0rSDVCXgBNDna5HUd0IUC1D7grwewtO2lwDQe+O0DLJ9NpkDUGXilYCZgsTdAVwpAhxxQfsBiB0m5pgF/sgAWm0FK1Q145wH0P+AGoJwU6rgHTBBgsWOkTLMNIEGBxeaREvUC3ucB+BPQhxTopA9ENsBiZ7Bci/4DkC2w2EIsVV+gMQJg6VOJhTofwPkwwGKXgCIs0vKAjocFFluGJarM0vGwwF+AASSsIuBiFk7nAix2Nemf9posHc4VWGx1UrADgeYEgL8Bg+KGbQdcD+FsPoDFbgPt4wTeENLRfAGLrY8Ldhjw3QLgNmB41LDFwP0cnMwnsNgjoMS2u/LfCIEjv2svAH5ZBCy+VBPDGj7pkauKG/gKMJIYNQY4lwDwTWACCWpclntyWOB7wBQs0lQtlOUb+Jmu00Ri6HJgFdDPJwJbrAWyXIHrdCwZ00viw1qgJxFqhzrTCuwBehv6legX0xACuEGvNe2vvXXuVu2/jQg1WNdSxrmvwFagzKdEutGV+jEBN2pfucZLZTrXV9e6jvwgUQTMAZ46Jv6ssW2pTxViu56u3MDN+pn08VKpjv3ZMd9T9SHWdd0OWAK8djhSD6z0+TlWALMc72dpm5dKdKx6x/ivdU7Tuo5FJcAK13p9q21hjnBFeld+6RjvI7AJ6IhF6gSsAz7ksKVM1QOBc11vSbJu3AG4C1zQSMtL3fVu3uJw/BYwyWfcSdon079Fx5CxvDRGfbirPkWmHo7tQGLpU8AQQ98++uxGmyu/XOXoU6Vtmc/b9BpTTWmIzpmJ41t9vpS8aZVr3/wJHPapDkhq9ajjlJX5opyO/9I+pjRspc7x0zW3+JJY7feHPrJguusONZyy5NQzwiey22nIsJwgRnUFan1Cx836MIuXRmtV8LS+9lJnHcMUetYmcSMbrilTUywcZivx2uLcJut2FBaXR98G2JO99l6TLSVhHQ3gZCYcrDbsvQ8DjnEESwKOmoAOu6v6Z7O4rsbnYBG7Bml1L6qMR7Pm0qzS/AiBJRFgpQ5EALwfi9UReJBH4Cc+Z2xr1N91WA8L3KQl2VRopk+iPgiwXDuXlGl3DsC7SKGKgRshgO9EfcaNUpUaUwcFbrThSZ1cNcVVcTQBy/8eplMg2h4AONKEetyStOplH+BrcT+kEocq9JzrBn6vD6YWpCZq6jaj59oWm/4BY+sFTFItx4UAAAAASUVORK5CYII=" />19,769.39</p>
                            </div>
                            <div>
                                <p className='text-[#14C8B0]'>+26.52%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='font-bold'>2</p>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>CryptoFunks</p>
                                <p className='flex items-center'><img className='h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nN2ba4hNURTHf8MMjcdgMFKDUl4llPFBCKEkQhkiShQJ+eJRPnl9UKSID4gPfCKFSB5J8iaPJkxkkGbKa5qYYUaerVq3Tqezj3PPveecfe6/Vt277z57r9/t7rPXXutciFdjgceO90+0rSDVCXgBNDna5HUd0IUC1D7grwewtO2lwDQe+O0DLJ9NpkDUGXilYCZgsTdAVwpAhxxQfsBiB0m5pgF/sgAWm0FK1Q145wH0P+AGoJwU6rgHTBBgsWOkTLMNIEGBxeaREvUC3ucB+BPQhxTopA9ENsBiZ7Bci/4DkC2w2EIsVV+gMQJg6VOJhTofwPkwwGKXgCIs0vKAjocFFluGJarM0vGwwF+AASSsIuBiFk7nAix2Nemf9posHc4VWGx1UrADgeYEgL8Bg+KGbQdcD+FsPoDFbgPt4wTeENLRfAGLrY8Ldhjw3QLgNmB41LDFwP0cnMwnsNgjoMS2u/LfCIEjv2svAH5ZBCy+VBPDGj7pkauKG/gKMJIYNQY4lwDwTWACCWpclntyWOB7wBQs0lQtlOUb+Jmu00Ri6HJgFdDPJwJbrAWyXIHrdCwZ00viw1qgJxFqhzrTCuwBehv6legX0xACuEGvNe2vvXXuVu2/jQg1WNdSxrmvwFagzKdEutGV+jEBN2pfucZLZTrXV9e6jvwgUQTMAZ46Jv6ssW2pTxViu56u3MDN+pn08VKpjv3ZMd9T9SHWdd0OWAK8djhSD6z0+TlWALMc72dpm5dKdKx6x/ivdU7Tuo5FJcAK13p9q21hjnBFeld+6RjvI7AJ6IhF6gSsAz7ksKVM1QOBc11vSbJu3AG4C1zQSMtL3fVu3uJw/BYwyWfcSdon079Fx5CxvDRGfbirPkWmHo7tQGLpU8AQQ98++uxGmyu/XOXoU6Vtmc/b9BpTTWmIzpmJ41t9vpS8aZVr3/wJHPapDkhq9ajjlJX5opyO/9I+pjRspc7x0zW3+JJY7feHPrJguusONZyy5NQzwiey22nIsJwgRnUFan1Cx836MIuXRmtV8LS+9lJnHcMUetYmcSMbrilTUywcZivx2uLcJut2FBaXR98G2JO99l6TLSVhHQ3gZCYcrDbsvQ8DjnEESwKOmoAOu6v6Z7O4rsbnYBG7Bml1L6qMR7Pm0qzS/AiBJRFgpQ5EALwfi9UReJBH4Cc+Z2xr1N91WA8L3KQl2VRopk+iPgiwXDuXlGl3DsC7SKGKgRshgO9EfcaNUpUaUwcFbrThSZ1cNcVVcTQBy/8eplMg2h4AONKEetyStOplH+BrcT+kEocq9JzrBn6vD6YWpCZq6jaj59oWm/4BY+sFTFItx4UAAAAASUVORK5CYII=" />19,769.39</p>
                            </div>
                            <div>
                                <p className='text-[#FF002E]'>+26.52%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='font-bold'>3</p>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>CryptoFunks</p>
                                <p className='flex items-center'><img className='h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nN2ba4hNURTHf8MMjcdgMFKDUl4llPFBCKEkQhkiShQJ+eJRPnl9UKSID4gPfCKFSB5J8iaPJkxkkGbKa5qYYUaerVq3Tqezj3PPveecfe6/Vt277z57r9/t7rPXXutciFdjgceO90+0rSDVCXgBNDna5HUd0IUC1D7grwewtO2lwDQe+O0DLJ9NpkDUGXilYCZgsTdAVwpAhxxQfsBiB0m5pgF/sgAWm0FK1Q145wH0P+AGoJwU6rgHTBBgsWOkTLMNIEGBxeaREvUC3ucB+BPQhxTopA9ENsBiZ7Bci/4DkC2w2EIsVV+gMQJg6VOJhTofwPkwwGKXgCIs0vKAjocFFluGJarM0vGwwF+AASSsIuBiFk7nAix2Nemf9posHc4VWGx1UrADgeYEgL8Bg+KGbQdcD+FsPoDFbgPt4wTeENLRfAGLrY8Ldhjw3QLgNmB41LDFwP0cnMwnsNgjoMS2u/LfCIEjv2svAH5ZBCy+VBPDGj7pkauKG/gKMJIYNQY4lwDwTWACCWpclntyWOB7wBQs0lQtlOUb+Jmu00Ri6HJgFdDPJwJbrAWyXIHrdCwZ00viw1qgJxFqhzrTCuwBehv6legX0xACuEGvNe2vvXXuVu2/jQg1WNdSxrmvwFagzKdEutGV+jEBN2pfucZLZTrXV9e6jvwgUQTMAZ46Jv6ssW2pTxViu56u3MDN+pn08VKpjv3ZMd9T9SHWdd0OWAK8djhSD6z0+TlWALMc72dpm5dKdKx6x/ivdU7Tuo5FJcAK13p9q21hjnBFeld+6RjvI7AJ6IhF6gSsAz7ksKVM1QOBc11vSbJu3AG4C1zQSMtL3fVu3uJw/BYwyWfcSdon079Fx5CxvDRGfbirPkWmHo7tQGLpU8AQQ98++uxGmyu/XOXoU6Vtmc/b9BpTTWmIzpmJ41t9vpS8aZVr3/wJHPapDkhq9ajjlJX5opyO/9I+pjRspc7x0zW3+JJY7feHPrJguusONZyy5NQzwiey22nIsJwgRnUFan1Cx836MIuXRmtV8LS+9lJnHcMUetYmcSMbrilTUywcZivx2uLcJut2FBaXR98G2JO99l6TLSVhHQ3gZCYcrDbsvQ8DjnEESwKOmoAOu6v6Z7O4rsbnYBG7Bml1L6qMR7Pm0qzS/AiBJRFgpQ5EALwfi9UReJBH4Cc+Z2xr1N91WA8L3KQl2VRopk+iPgiwXDuXlGl3DsC7SKGKgRshgO9EfcaNUpUaUwcFbrThSZ1cNcVVcTQBy/8eplMg2h4AONKEetyStOplH+BrcT+kEocq9JzrBn6vD6YWpCZq6jaj59oWm/4BY+sFTFItx4UAAAAASUVORK5CYII=" />19,769.39</p>
                            </div>
                            <div>
                                <p className='text-[#14C8B0]'>+26.52%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='font-bold'>4</p>
                            <div className="relative avatar">
                                <div className="w-14 rounded-full">
                                    <div className="absolute top-0 -right-1.5 h-7"><img src={verified} alt="" /></div>
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>CryptoFunks</p>
                                <p>19,769.39</p>
                            </div>
                            <div>
                                <p className='text-[#14C8B0]'>+26.52%</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p className='font-bold'>5</p>
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </div>
                            <div>
                                <p className='font-medium'>CryptoFunks</p>
                                <p className='flex items-center'><img className='h-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nN2ba4hNURTHf8MMjcdgMFKDUl4llPFBCKEkQhkiShQJ+eJRPnl9UKSID4gPfCKFSB5J8iaPJkxkkGbKa5qYYUaerVq3Tqezj3PPveecfe6/Vt277z57r9/t7rPXXutciFdjgceO90+0rSDVCXgBNDna5HUd0IUC1D7grwewtO2lwDQe+O0DLJ9NpkDUGXilYCZgsTdAVwpAhxxQfsBiB0m5pgF/sgAWm0FK1Q145wH0P+AGoJwU6rgHTBBgsWOkTLMNIEGBxeaREvUC3ucB+BPQhxTopA9ENsBiZ7Bci/4DkC2w2EIsVV+gMQJg6VOJhTofwPkwwGKXgCIs0vKAjocFFluGJarM0vGwwF+AASSsIuBiFk7nAix2Nemf9posHc4VWGx1UrADgeYEgL8Bg+KGbQdcD+FsPoDFbgPt4wTeENLRfAGLrY8Ldhjw3QLgNmB41LDFwP0cnMwnsNgjoMS2u/LfCIEjv2svAH5ZBCy+VBPDGj7pkauKG/gKMJIYNQY4lwDwTWACCWpclntyWOB7wBQs0lQtlOUb+Jmu00Ri6HJgFdDPJwJbrAWyXIHrdCwZ00viw1qgJxFqhzrTCuwBehv6legX0xACuEGvNe2vvXXuVu2/jQg1WNdSxrmvwFagzKdEutGV+jEBN2pfucZLZTrXV9e6jvwgUQTMAZ46Jv6ssW2pTxViu56u3MDN+pn08VKpjv3ZMd9T9SHWdd0OWAK8djhSD6z0+TlWALMc72dpm5dKdKx6x/ivdU7Tuo5FJcAK13p9q21hjnBFeld+6RjvI7AJ6IhF6gSsAz7ksKVM1QOBc11vSbJu3AG4C1zQSMtL3fVu3uJw/BYwyWfcSdon079Fx5CxvDRGfbirPkWmHo7tQGLpU8AQQ98++uxGmyu/XOXoU6Vtmc/b9BpTTWmIzpmJ41t9vpS8aZVr3/wJHPapDkhq9ajjlJX5opyO/9I+pjRspc7x0zW3+JJY7feHPrJguusONZyy5NQzwiey22nIsJwgRnUFan1Cx836MIuXRmtV8LS+9lJnHcMUetYmcSMbrilTUywcZivx2uLcJut2FBaXR98G2JO99l6TLSVhHQ3gZCYcrDbsvQ8DjnEESwKOmoAOu6v6Z7O4rsbnYBG7Bml1L6qMR7Pm0qzS/AiBJRFgpQ5EALwfi9UReJBH4Cc+Z2xr1N91WA8L3KQl2VRopk+iPgiwXDuXlGl3DsC7SKGKgRshgO9EfcaNUpUaUwcFbrThSZ1cNcVVcTQBy/8eplMg2h4AONKEetyStOplH+BrcT+kEocq9JzrBn6vD6YWpCZq6jaj59oWm/4BY+sFTFItx4UAAAAASUVORK5CYII=" />19,769.39</p>
                            </div>
                            <div>
                                <p className='text-[#FF002E]'>+26.52%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default TopCollectionSection;