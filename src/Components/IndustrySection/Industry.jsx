import React from 'react';
import hhuz from '../../../public/hhuz.png'
import shape from '../../assets/Shape.png'

const Industry = () => {
    return (
        <div className="mt-16 p-10 bg-gray-100 rounded-3xl">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row lg:flex-row gap-10 pb-3 border-b-[1px] border-gray-300">
                    <h1 className=" text-xl md:text-2xl font-bold text-gray-800 header px-0">SOHA IMKONIYATLARI</h1>
                    <div className="flex flex-col md:flex-row items-start gap-5 md:justify-start">
                        <img src={hhuz} alt="" className='h-[50px] w-[80px] object-cover' />
                        <p className='text-sm monsserat'>www.hh.uz saytida joylashtirilgan ma'lumotlar asosida</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-3">
                    <div className="text-start">
                        <p className="text-md pb-3 pt-2 monsserat font-semibold text-blue-800">643 bo'sh ish o'rinlari</p>
                        <p className="text-xs text-gray-700 monsserat">HH.uz saytida 2024-yil yanvar oy ma'lumotlari</p>
                    </div>
                    <div className="text-start">
                        <p className="text-md pb-3 pt-2 monsserat font-semibold text-blue-800">50+ ortiq davlatlarda</p>
                        <p className="text-xs text-gray-700 monsserat">platformada intensiv mashg'ulotlar birinchi ishingizni olish uchun etarli</p>
                    </div>
                    <div className="text-start">
                        <p className="text-md pb-3 pt-2 monsserat font-semibold text-blue-800">400$+</p>
                        <p className="text-xs text-gray-700 monsserat">boshlang'ich ish haqi uchun to'lovlar</p>
                    </div>
                </div>
                
                <div className="flex p-5 bg-white relative overflow-hidden rounded-3xl items-center justify-center">
                    <img src={shape} alt="" className='w-full object-cover shape'/>
                    <img src={shape} alt="" className='w-full object-cover shape2'/>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Legal industry</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Finance</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Banking</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Retail</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Logistics</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Insurance</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Hospitality</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Real estate</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">Media and software</div>
                        <div className="px-4 py-2 border-2 text-xs border-gray-200 rounded-full">And more</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Industry;