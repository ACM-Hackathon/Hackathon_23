import { useContext,useState, useEffect } from 'react';
import Link from 'next/link';
import { Scrollbar } from 'components/scrollbar';
import ActiveLink from 'components/active-link';
import { DrawerContext } from 'contexts/drawer/drawer.provider';
import CloseIcon from 'assets/icons/close';
import Logo from 'assets/icons/logo';
import axios from 'axios';
import {
  Facebook,
  Twitter,
  Youtube,
  Github,
  Instagram,
  Linkedin,
} from 'assets/icons/social-icons';
import { BsDisplay } from 'react-icons/bs';

let isUserLogin = false;
const menus = [
  {
    id: 1,
    pathname: '/',
    title: 'Home',
  },
  {
    id: 2,
    pathname: '/faq',
    title: 'FAQ',
  },

   {
     id: 3,
     pathname: '/login',
     title: 'Register/Login',
   },
];

const social = [
  {
    id: 0,
    link: '/',
    icon: <Facebook />,
    className: 'facebook',
    title: 'facebook',
  },
  {
    id: 1,
    link: '/',
    icon: <Twitter />,
    className: 'twitter',
    title: 'twitter',
  },
  {
    id: 2,
    link: '/',
    icon: <Youtube />,
    className: 'youtube',
    title: 'youtube',
  },
  {
    id: 3,
    link: '/',
    icon: <Github />,
    className: 'github',
    title: 'github',
  },
  {
    id: 4,
    link: '/',
    icon: <Instagram />,
    className: 'instagram',
    title: 'instagram',
  },
  {
    id: 5,
    link: '/',
    icon: <Linkedin />,
    className: 'linkedin',
    title: 'linkedin',
  },
];

export default function DrawerMenu() {
  const fetchData2 = async (URL2) => {
    try {

      await axios({
        method: 'GET',
        url: URL2,
      }).then((res) => {
   
        setRole(res.data.finalRole)
    
      //   setRole(res.data.finalRole);
          // console.out(role);
      });
    } 
    catch (err){
      console.log(err)
    }
  }
  const [role,setRole] = useState('');
  useEffect(()=>{
    const URL2 = "https://medirole-api-production.up.railway.app/api/v1/users/getrole";
    fetchData2(URL2);
  })
  const { dispatch } = useContext(DrawerContext);
  const hideMenu = () => {
    dispatch({
      type: 'OPEN_MENU',
      payload: {
        menu: false,
      },
    });
  };

  return (
    <>
      <div className="flex flex-col w-500 h-full">
        <div className="w-full h-90px bg-gray-100 flex justify-start items-center relative px-30px flex-shrink-0">
          <Link href="/">
            <a className="flex" onClick={hideMenu}>
              <span className="sr-only">Medsy</span>
              <Logo width="100px" id="medsy-menu-logo" />
            </a>
          </Link>

          <div className="flex items-center justify-end ml-auto pl-30px pr-50px text-gray-700 flex-shrink-0 lg:hidden">
            {/* <PhoneIcon /> */}
            <span className="font-semibold text-base text-14px ml-3">
              +1 855-766-5885
            </span>
          </div>

          <button
            className="w-30px h-30px flex items-center justify-center text-gray-500 absolute right-25px focus:outline-none"
            onClick={hideMenu}
            aria-label="close"
          >
            <CloseIcon />
          </button>
        </div>

        <Scrollbar className="menu-scrollbar flex-grow">
          <div className="flex flex-col py-60px pb-40px lg:pb-60px">
            {role === '' &&   menus.map((menu, index) => (
              <ActiveLink
                href={menu.pathname}
                activeClassName="font-semibold active"
                key={index}
              >
                {
                  menu.title === 'Register/Login'? <a
                    className="menu-item relative text-green font-extrabold pl-30px pr-4 mb-8 mt-64 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                    onClick={hideMenu}
                  >
                    {(menu.title)}
                  </a>:
                  <a
                  className="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                  onClick={hideMenu}
                >
                  {menu.title}
                </a>
                }
              </ActiveLink>
            ))}
              {role != '' &&   menus.map((menu, index) => (
              <ActiveLink
                href={menu.pathname}
                activeClassName="font-semibold active"
                key={index}
              >
                {
                  menu.title === 'Register/Login'? <a
                    className="menu-item relative text-red-700 font-extrabold pl-30px pr-4 mb-8 mt-64 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                    onClick={hideMenu}
                  >
                    Logout
                  </a>:
                  <a
                  className="menu-item relative text-gray-900 pl-30px pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                  onClick={hideMenu}
                >
                  {menu.title}
                </a>
                }
              </ActiveLink>
            ))}

          </div>
          <ActiveLink href="/ologin">
          <div className="oracleLogin" style={{marginTop:"-2rem",marginLeft:"1.9rem",marginRight:"1.9rem"}}>
            <button  style={{width:"20rem",padding:"0.6rem"}} className="text-white  bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Join as a Oracle</button>
          </div>
          </ActiveLink>
        </Scrollbar>

        <div className="flex items-center justify-start border-t border-gray-300 bg-gray-100 h-12 px-30px flex-shrink-0 lg:hidden">
          {social.map((item, index) => (
            <a
              href={item.link}
              className={`social ${item.className}`}
              target="_blank"
              key={index}
            >
              <span className="sr-only">{item.title}</span>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
