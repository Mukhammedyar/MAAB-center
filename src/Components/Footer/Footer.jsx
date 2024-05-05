import React from 'react'
import './footer.css'
import { FaceBookLightIcon, InstagramLightIcon, LinkedinLightIcon, MailLightIcon, TelegramLightIcon, YoutubeLightIcon } from '../../UI/Icons/telegramIcon';
import MapIcon from '../../UI/Icons/MapIcon';
import PhoneIcon from '../../UI/Icons/phoneIcon';


const Footer = () => {
    return (
      <footer className="bg-[rgb(12,8,26)] text-white pt-10 px-[6%]">
        <div className="bg-[rgb(31,27,44)] rounded-3xl mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row justify-between gap-5 md:gap-5 lg:gap-20 py-5 px-5 lg:px-8">
            <div className="col-span-1 p-3">
                <img src={"https://www.maab.uz/image/footer/maab-white-logo.png"} alt="" className="h-[50px] w-[180px] object-cover lg:h-[60px] lg:w-[220px]" />
                <p className='my-4 text-md lg:text-lg monsserat font-medium text-gray-300'>+998 97 783 90 45</p>
                <div className={`flex items-centertext-sm gap-2 lg:gap-4`}>
                    <div className="p-[5px] border-2 border-[rgb(39,36,47)] rounded-full">
                        <TelegramLightIcon width={16} />  
                    </div>
                    <div className="p-[5px] border-2 border-[rgb(39,36,47)] rounded-full">
                        <InstagramLightIcon width={16}/>  
                    </div>
                    <div className="p-[5px] border-2 border-[rgb(39,36,47)] rounded-full">
                        <LinkedinLightIcon width={16}/> 
                    </div>
                    <div className="p-[5px] border-2 border-[rgb(39,36,47)] rounded-full">
                        <YoutubeLightIcon width={16}/> 
                    </div>
                    <div className="p-[5px] border-2 border-[rgb(39,36,47)] rounded-full">
                        <FaceBookLightIcon width={16}/>  
                    </div>
                </div>
            </div>
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 lg:grid-cols-3 md:grid-rows-1 lg:grid-rows-1 gap-1 py-3 place-items-center sm:place-items-start md:place-items-start lg:place-items-start">
            <div className=''>
              <h3 className="font-semibold header text-sm pb-3">KURSLARIMIZ</h3>
              <ul className='monsserat ul'>
                <li>Data analytics</li>
                <li>Data engineer</li>
                <li>Cloud data engineering</li>
              </ul>
            </div>
            <div className=''>
              <h3 className="font-semibold header text-sm pb-3">MANYULAR</h3>
              <ul className='monsserat ul'>
                <li>Grantlar</li>
                <li>Sertifikatlarimiz</li>
                <li>Ustozlar</li>
              </ul>
            </div>
            <div className='col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1'>
              <h3 className="font-semibold header text-sm pb-3">BIZ BILAN BOG'LANING</h3>
              <ul className='monsserat ul'>
                <li className='flex gap-1 items-center'> 
                    <MapIcon color={"white"} width={20} height={20}/> 
                    Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.</li>
                <li className='flex gap-2 items-center'>
                    <MailLightIcon width={16} height={16}/>
                    info@maab.uz</li>
                <li className='flex gap-2 items-center'>
                    <PhoneIcon width={16} height={16}/>
                    +998 97 783 90 45</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-start text-xs font-light py-5">
          © 2023 MAAB INNOVATION
        </div>
      </footer>
    );
  };
  
  export default Footer;
