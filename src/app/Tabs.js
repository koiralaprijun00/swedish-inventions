'use client'

import React, { useState } from 'react';
import inventionsData from './inventionsData'; // Adjust the path if needed
import Link from 'next/link';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(inventionsData[0]?.category);

  return (
    <div>
      <h2 className="text-md font-bold mt-16 mb-8">Explore swedishinventions.com</h2>
      <div className=" text-sm flex border-b border-gray-300 overflow-x-auto whitespace-nowrap gap-12">
        {inventionsData.map((category) => (
          <div
            key={category.category}
            className={`px-4 py-2 cursor-pointer ${
              activeTab === category.category ? 'border-b-2 border-black font-bold' : ''
            }`}
            onClick={() => setActiveTab(category.category)}
          >
            {category.category}
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-2">
        {inventionsData
          .find((category) => category.category === activeTab)
          ?.items.map((item, index) => (
            <div key={index} className="inline mr-[120px]">
            <Link
              key={index}
              href={`/invention/${encodeURIComponent(item.name)}`}
              className="inline-block text-blue-600 hover:text-blue-800 transition-colors"
            >
              <h3 className="inline">{item.name}</h3>
            </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
