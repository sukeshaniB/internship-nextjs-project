import React, { useState, useEffect } from 'react';

interface CardData {
  image: string;
  title: string;
  location: string;
  date: string;
  time: string;
  collection: string;
}

const Group: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const darkModeClass = 'dark';

    if (isDarkMode) {
      root.classList.add(darkModeClass);
    } else {
      root.classList.remove(darkModeClass);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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
    <div className={`absolute left-[-35px] top-[700px] text-3xl font-bold border-b-2 border-blue-500 w-full relative h-[918px] mr-[1248px] ${isDarkMode ? 'dark:bg-gray-800' : ''} text-center text-31xl font-poppin`}>
      <div className="absolute top-0 left-[calc(50% - 632px)] dark:hidden" style={{ background: `${isDarkMode ? 'linear-gradient(#18282A)' : 'linear-gradient(#f3f9ff)'}`, width: '1264px', height: '918px' }} />
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <div className="w-[36.75px] h-[49px]  border border-[#2C9CF0] flex justify-center items-center">
          <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z" fill="#2C9CF0"></path>
          </svg>
        </div>
      </div>
      <div className="absolute top-[70px] left-[calc(50% - 553.5px)] dark:bg-gray-800 w-[1106.8px] h-[799px]">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-40">
          <div className="w-[36.75px] h-[49px] border border-[#2C9CF0] flex justify-center items-center">
            <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1545 19.6407C11.4246 19.3706 11.5763 19.0043 11.5763 18.6223C11.5763 18.2403 11.4246 17.874 11.1545 17.6038L4.02397 10.4733L11.1545 3.34276C11.4169 3.07107 11.5621 2.70719 11.5588 2.3295C11.5555 1.9518 11.404 1.5905 11.137 1.32342C10.8699 1.05633 10.5086 0.904837 10.1309 0.901554C9.75319 0.898272 9.38931 1.04347 9.11763 1.30587L0.968638 9.45486C0.698583 9.725 0.546875 10.0913 0.546875 10.4733C0.546875 10.8553 0.698583 11.2216 0.968638 11.4917L9.11763 19.6407C9.38776 19.9108 9.7541 20.0625 10.1361 20.0625C10.518 20.0625 10.8844 19.9108 11.1545 19.6407Z" fill="#2C9CF0"></path>
            </svg>
          </div>
        </div>
        <div className="absolute top-[0px] left-[calc(50% - 553.4px)] w-[1106.8px] h-[799px] dark:bg-gray-800">
          <b className={`absolute top-[0px] left-[calc(50% - 257.8px)] leading-[105%]  inline-block text-left w-[814.8px] h-[52px]`}>
            Collection Spotlight
          </b>
          <div className={`absolute top-[80px] left-[calc(50% - 467.8px - 100px)] text-sm leading-[22.65px] font-inter inline-block  w-[934.7px] h-[46px]`}>
  Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
</div>

          <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
            <div className="w-[36.75px] h-[49px] border border-[#2C9CF0] flex justify-center items-center">
              <svg width="19" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.594509 19.6407C0.324454 19.3706 0.172746 19.0043 0.172746 18.6223C0.172746 18.2403 0.324454 17.874 0.594509 17.6038L7.72505 10.4733L0.594509 3.34276C0.332108 3.07107 0.186912 2.70719 0.190194 2.3295C0.193476 1.9518 0.344974 1.5905 0.612056 1.32342C0.879139 1.05633 1.24044 0.904837 1.61814 0.901554C1.99584 0.898272 2.35971 1.04347 2.6314 1.30587L10.7804 9.45486C11.0504 9.725 11.2021 10.0913 11.2021 10.4733C11.2021 10.8553 11.0504 11.2216 10.7804 11.4917L2.6314 19.6407C2.36126 19.9108 1.99492 20.0625 1.61295 20.0625C1.23098 20.0625 0.864645 19.9108 0.594509 19.6407Z" fill="#2C9CF0"></path>
              </svg>
            </div>
          </div>
          <div className={`absolute top-[174px] ${isDarkMode ? 'dark:bg-gray-900' : 'dark:bg-gray-800'} left-[300px] w-[1106.8px] h-[625px] text-mid`}>
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
                  <h2 className={`text-xl font-bold mb-2 `}>{card.title}</h2>
                  <p className={`text-sm mb-2 `}>{card.location}</p>
                  <p className={`text-sm mb-2 `}>{card.date} | {card.time}</p>
                  <p className={`text-sm font-semibold `}>{card.collection}</p>
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
