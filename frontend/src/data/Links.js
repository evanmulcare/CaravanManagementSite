import {RiDashboardFill, RiCaravanLine, RiContactsLine} from 'react-icons/ri'
import {IoMdContacts} from 'react-icons/io'
import {RxEnter, RxExit, RxExitFullScreen} from 'react-icons/rx'
import {AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineStock} from 'react-icons/ai'
import {FaTasks} from 'react-icons/fa'
import {FiShoppingBag, FiEdit} from 'react-icons/fi'
export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Dashboard',
        icon: <RiDashboardFill />,
      },
    ],
  },

  {
    title: 'People',
    links: [
      {
        name: 'tenants',
        icon: <RiDashboardFill />,
      },
      {
        name: 'employees',
        icon: <IoMdContacts />,
      },
    ],
  },

  {
    title: 'Money',
    links: [
      {
        name: 'payments',
        icon: <RxEnter />,
      },
      {
        name: 'payroll',
        icon: <RxExit />,
      },
      {
        name: 'expenses',
        icon: <RxExit />,
      },
    ],
  },

  {
    title: 'Planning',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'tasks',
        icon: <FaTasks />,
      },
      {
        name: 'blog',
        icon: <FiEdit />,
      },
      
    ],
  },

  {
    title: 'Members',
    links: [
      {
        name: 'SiteInfo',
        icon: <RiCaravanLine />,
      },
      {
        name: 'exit',
        icon: <RxExitFullScreen />,
      },
    ],
  },
];


export const publicLinks = [
  {
    title: 'Home',
    links: [
      {
        name: 'home',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'photos',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'about',
        icon: <IoMdContacts />,
      },
      {
        name: 'contact',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Members',
    links: [
      {
        name: 'Sign-in',
        icon: <AiOutlineStock />,
      },
    ],
  },
];
