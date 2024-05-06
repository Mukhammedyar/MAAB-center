import React from 'react'
import './header.css'
import video from '../../assets/video.mov'
import cup from '../../assets/cup.png'
import { stylesHeader } from './stylesHeader';

export default function Header() {

    return (
        <div className={`${stylesHeader.responsiveContainer}`}>
            <div className="text-white rounded-3xl relative h-[85vh] md:h-[90vh] lg:h-[90vh] overflow-hidden shadow-xl">
                <video src={video} autoPlay muted loop className="video object-cover w-full h-full" />
                <div className={`absolute w-full ${stylesHeader.positionText}`}>
                    <h1 className={`${stylesHeader.responsiveHeader} header font-bold text-center`}>SIZGA ZARUR BO'LGAN BARCHA BILIM VA KO'NIKMALAR SHU YERDA!</h1>
                </div>
                <div className={`flex cup items-center flex-col ${stylesHeader.responsiveHidden} ${stylesHeader.positionCup}`}>
                    <img src={cup} alt="Trophy" className=" mr-5 w-[130px] h-[130px]"/> {/* Update icon path */}
                    <p className='cup-text -rotate-[10deg] -mt-2 w-[130px] text-center font-bold text-lg text-orange-400'>grant sohibi bo'ling</p>
                </div>
                <div className="shadow-fade"></div>
            </div>
        </div>
      );
}


