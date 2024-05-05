import React from 'react';

const StatisticCounter = ({ number, label }) => {
  return (
    <div className="p-3 text-start ">
      <h2 className="text-lg header md:text-xl lg:text-3xl text-center py-1 text-orange-600">{number}</h2>
      <span className="text-[11px] md:text-xs lg:text-xs sm:text-center md:text-start lg:text-start text-gray-700">{label}</span>
    </div>
  );
};

export default function StatisticsRow() {
  return (
      <div className="flex flex-col bg-white rounded-3xl p-4 border border-gray-300 mt-5">
          <h1 className='text-md lg:text-lg text-center header uppercase text-gray-700'>O'quv markaz korsatkichlari</h1>
      <div className='flex items-start justify-around'>
        <StatisticCounter number="1400" label="Bitiruvchilar" />
        <StatisticCounter number="1500+" label="Kampus sig'imi" />
        <StatisticCounter number="800+" label="Yiliga onlayn bitiruvchilar" />
        <StatisticCounter number="60+" label="Mentorlarimiz" />
      </div>
    </div>
  );
};
