import React from 'react'
import { coursesData } from '../../data/dataCourses'
import CoursesCard from './CoursesCard'

export default function Courses() {
  return (
    <div className="max-w-7xl mx-auto mt-12">
      <div className='mx-auto w-1/2'>
        <h2 className="text-3xl text-center font-bold text-neutral-800 mb-4 header">BIZNING KURSLARIMIZ</h2>
        <p className='text-xs text-center text-gray-600 font-normal'>Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их навыки английского языка, математики и решения задач.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {coursesData.map((course, index) => (
          <CoursesCard key={index} {...course} />
        ))}
      </div>
    </div>
  )
}
