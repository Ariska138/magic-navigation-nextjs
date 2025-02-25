import React, { useState } from 'react';
import {
  ChatboxOutline,
  HomeOutline,
  ImageOutline,
  PersonOutline,
  SettingsOutline,
} from 'react-ionicons';

const Navigation = () => {
  const Menus = [
    {
      name: 'Home',
      icon: <HomeOutline />,
      dis: 'translate-x-0',
    },
    {
      name: 'Profile',
      icon: <PersonOutline />,
      dis: 'translate-x-16',
    },
    {
      name: 'Message',
      icon: <ChatboxOutline />,
      dis: 'translate-x-32',
    },
    {
      name: 'Photos',
      icon: <ImageOutline />,
      dis: 'translate-x-48',
    },
    {
      name: 'Settings',
      icon: <SettingsOutline />,
      dis: 'translate-x-64',
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl">
      <ul className="flex relative">
        <span
          className={`bg-rose-600 duration-500 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full transition-all`}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {Menus.map((menu, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6 cursor-pointer"
              onClick={() => setActive(i)}
            >
              <span
                className={`text-xl self-center z-10 duration-500 ${
                  i === active ? '-mt-6 text-white' : ''
                }`}
              >
                {React.cloneElement(menu.icon, {
                  color: i === active ? 'white' : 'black',
                  style: {
                    transition: 'color 0.5s ease',
                  },
                })}
              </span>
              <span
                className={`${
                  active === i
                    ? 'translate-y-5 duration-700 opacity-100'
                    : 'opacity-0 translate-y-10'
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
