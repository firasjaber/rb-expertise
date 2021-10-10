import { Link, useLocation } from 'react-router-dom';
import Logo from './../utils/logo.svg';
import Profile from './../utils/profile.jpeg';
import {
  TemplateIcon,
  FlagIcon,
  UsersIcon,
  LocationMarkerIcon,
  CalendarIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

const links = [
  {
    id: 0,
    link: '/overview',
    title: 'Overview',
    icon: <TemplateIcon className='w-6 h-6' />,
  },
  {
    id: 1,
    link: '/calendar',
    title: 'Calendar',
    icon: <CalendarIcon className='w-6 h-6' />,
  },
  {
    id: 2,
    link: '/team',
    title: 'Team',
    icon: <UsersIcon className='w-6 h-6' />,
  },
  {
    id: 3,
    link: '/appointments',
    title: 'Appointments',
    icon: <LocationMarkerIcon className='w-6 h-6' />,
  },
  {
    id: 4,
    link: '/missions',
    title: 'Missions',
    icon: <FlagIcon className='w-6 h-6' />,
  },
];

export const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className='flex flex-col justify-between items-center h-screen sticky top-0 w-80 bg-gradient-to-bl from-blue-700 to-blue-600'>
      <div className='w-full flex flex-col items-center'>
        <img src={Logo} alt='logo' className='w-52 h-auto my-6' />
        <div className='w-full h-0.5 bg-gray-300 opacity-25 rounded-3xl mb-6 mt-1'></div>
        {links.map((l) => (
          <div
            className={`flex items-center text-gray-100 py-3 space-x-2 w-full pl-16 transition-all hover:bg-blue-800 cursor-pointer ${
              pathname.includes(l.link) ? 'bg-blue-800' : ''
            }`}
            key={l.id}
          >
            {l.icon}
            <Link
              to={l.link}
              className='font-semibold font-nunito text-xl mt-0.5'
            >
              {l.title}
            </Link>
          </div>
        ))}
      </div>

      <div className='flex items-center w-full justify-between p-10'>
        <div className='flex space-x-4'>
          <img src={Profile} alt='profile' className='w-12 h-12 rounded-full' />
          <div className='flex flex-col'>
            <div className='text-gray-100 text-lg font-semibold'>
              Rami Bouajila
            </div>
            <span className='text-gray-300 text-sm -mt-1'>Admin</span>
          </div>
        </div>
        <Link to='/login'>
          <LogoutIcon className='text-gray-100 w-6 h-6 hover:text-gray-300 cursor-pointer' />
        </Link>
      </div>
    </div>
  );
};
