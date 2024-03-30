// Group.tsx
import React, { useState, useEffect } from 'react';

interface CardData {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  collection: string;
}

interface GroupProps {
  isDarkMode: boolean;
}

const Group: React.FC<GroupProps> = ({ isDarkMode }) => {
  // Data for the three cards
  const cardsData: CardData[] = [
    {
      image: '/images/image1.png',
      title: 'Las Vegas Aviators',
      location: 'Las Vegas Ballpark, Las Vegas, Nevada',
      date: 'Oct 15',
      time: '4:30 PM',
      collection: 'Take Flight Collection'
    },
    {
      image: '/images/image2.png',
      title: 'Sacramento River Cats',
      location: 'Sutter Health Park, Sacramento, California',
      date: 'Oct 15',
      time: '4:30 PM',
      collection: 'Orange Collection'
    },
    {
      image: '/images/image3.png',
      title: 'Las Vegas Aviators',
      location: 'Las Vegas Ballpark, Las Vegas, Nevada',
      date: 'Oct 15',
      time: '4:30 PM',
      collection: 'Take Flight Collection'
    }
  ];

  return (
    <div className={`absolute left-[-35px] top-[700px] text-3xl font-bold text-black border-b-2 border-blue-500 w-full relative h-[918px] mr-[1248px] ${isDarkMode ? 'dark:bg-gray-800' : ''} text-center text-31xl text-black font-poppin`}>
      <div className="absolute top-0 left-[calc(50% - 632px)] dark:hidden" style={{ background: `${isDarkMode ? 'linear-gradient(#18282A)' : 'linear-gradient(#f3f9ff)'}`, width: '1264px', height: '918px' }} />
    
      
      <div className="absolute top-[70px] left-[calc(50%_-_553.5px)] dark:bg-gray-800 w-[1106.8px] h-[799px]">
        <div className="absolute dark:bg-gray-800 top-[0px] left-[calc(50%_-_553.4px)] w-[1106.8px] h-[799px]">
          <b className={`absolute top-[0px] left-[calc(50%_-_257.8px)] leading-[105%] ${isDarkMode ? 'dark:text-white' : 'text-black'} inline-block text-left w-[514.8px] h-[52px]`}>
            Collection Spotlight
          </b>
          <div className={`absolute top-[77px] left-[calc(50%_-_467.8px)] ${isDarkMode ? 'dark:text-white' : 'text-black'} text-sm leading-[22.65px] font-inter inline-block w-[934.7px] h-[46px]`}>
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </div>
          <div className={`absolute top-[174px] ${isDarkMode ? 'dark:bg-gray-900' : 'dark:bg-gray-800'} left-[0px] w-[1106.8px] h-[625px] text-mid`}>
            <div className="grid grid-cols-3 gap-4">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className={`bg-gray-900 p-4 rounded-lg shadow-lg text-white custom-card ${isDarkMode ? 'dark:bg-gray-900' : 'dark:bg-gray-800'}`} // Updated custom-card class
                >
                  <img
                    className="mb-4 rounded-md"
                    src={card.image}
                    alt={card.title}
                    style={{ width: '400px', height: '400px' }}
                  />
                  <h2 className="text-xl font-bold mb-2">{card.title}</h2>
                  <p className="text-sm mb-2">{card.location}</p>
                  <p className="text-sm mb-2">{card.date} | {card.time}</p>
                  <p className="text-sm font-semibold">{card.collection}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
