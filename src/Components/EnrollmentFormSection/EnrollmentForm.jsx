import React, { useState } from 'react'
import stylesModule from '../Navbar/styles.module.css'
import InputWhite, { InfoIcon, InputNumberWhite } from '../../UI/Input';
import Checkbox from '../../UI/Checkbox';
import Dropdown from '../../UI/Dropdown';
import DownIcon from '../../UI/Icons/DownIcon';
import UpIcon from '../../UI/Icons/UpIcon';
import RightIcon from '../../UI/Icons/rightIcon';
import { buttons, styles } from '../../Styles/styles';
import DropdownInput from './DropdownInput';
import Button from '../../UI/Button';

export default function EnrollmentCourse() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        englishLevel: '',
        studyLevel: '',
        preferredMode: 'online'
    });
  const [openLevel, setOpenLevel] = useState(false)
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Process form data here
      };
    
    return (
    <div className="bg-gray-100 p-6 rounded-3xl w-full mt-16 mb-10 grid md:grid-cols-2 gap-8">
        <div className='flex flex-col p-2 pt-5 text-gray-700 w-full'>
          <h2 className="text-3xl header font-bold mb-6 text-gray-800">KURSGA YOZILISH</h2>
          <p className="text-xs md:w-[80%]">
            Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их <span className="text-orange-600 hover:text-orange-600">навыки английского языка, математики и решения задач.</span>
          </p>
          <p className="text-xs pt-3">
            И принимают только лучших студентов по всей стране.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='bg-white rounded-3xl p-4'>
          <div className='flex items-center justify-between mb-6'>
            <p className="text-gray-800 font-medium">Bo'sh kataklarni to'ldiring</p>
            <div>
              <label className="flex items-center gap-2">
                <p className=' text-xs'>Online</p>
                <Checkbox size={"small"}/>
                <p className="text-xs text-orange-600">Offline</p>
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <InputWhite label={"Ismingiz"} placeholder={"Abbos"} width={"100%"}/>
            <InputNumberWhite label={"Telefon raqamingiz"} defaultValue={"+998"} />
            <div className="relative">
              <p className='text-xs pb-1 flex items-center gap-2'>Ingliz tili darajangiz <InfoIcon/></p>
              <p
                onClick={() => setOpenLevel(!openLevel)}
                className={` px-3 bg-[#F2F2F2] border-[1px] border-[#d5d4d4] rounded-lg py-1 text-xs flex items-center justify-between text-gray-800`}
                >Darajangiz {!openLevel ? <DownIcon color={'#c1c1c1'}/> : <UpIcon color={'#c1c1c1'}/> }</p>
              <DropdownInput openLevel={openLevel}/>
            </div>
            <div className="relative">
              <p className='text-xs pb-1 flex items-center gap-2'>Mantiqiy bilim darajangiz darajangiz <InfoIcon/></p>
              <p
                className={` px-3 bg-[#F2F2F2] border-[1px] border-[#d5d4d4] rounded-lg py-1 text-xs flex items-center justify-between text-gray-800`}
                >Bilim darajangiz {!openLevel ? <DownIcon color={'#c1c1c1'}/> : <UpIcon color={'#c1c1c1'}/> }</p>
          </div>
        </div>
        
        <Button typeButton={buttons.primaryButton} className={"mt-10 float-end"}>Bekor qilish <RightIcon color={"white"}/></Button>
        </form>
    </div>
    );
    
}
