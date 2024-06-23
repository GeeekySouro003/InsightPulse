import { header, adminRoutes, userRoutes } from "../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "../design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/authSlice";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [toggle, setToggle] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      // await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b shadow-lg border-gray-200 lg:bg-background/90 lg:backdrop-blur-sm 
    ${openNavigation ? "bg-background" : "bg-background/90 backdrop-blur-sm"}`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 mx-lg:py-4">
          <Link to={"/"}>
            <a className="block w-[12rem] xl:mr-8">
              <span className="text-lg w-[12rem] md:text-3xl">ReviewHub</span>
            </a>
          </Link>
          <nav
            className={`${openNavigation ? "flex" : "hidden"} 
            fixed top-[5rem] bottom-0 left-0 right-0 bg-background lg:static lg:flex lg:mx-auto`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {!userInfo && header.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-text transition-colors hover:text-secondary
                    ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold
                    ${
                      item.url === pathName.hash
                        ? "z-2 lg:text-text"
                        : "lg:text-text"
                    }`}
                >
                  {item.title}
                </a>
              ))}

              {/* For Users */}
              {
                userInfo && userRoutes.map((link)=>(
                  <a
                  key={link.id}
                  href={link.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-text transition-colors hover:text-secondary
                    ${
                      link.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold
                    ${
                      link.url === pathName.hash
                        ? "z-2 lg:text-text"
                        : "lg:text-text"
                    }`}
                >
                  {link.title}
                </a>
                ))
              }
              {/* For Admins */}
              {
                userInfo?.isAdmin && adminRoutes.map((link)=>(
                  <a
                  key={link.id}
                  href={link.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-text transition-colors hover:text-secondary
                    ${
                      link.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold
                    ${
                      link.url === pathName.hash
                        ? "z-2 lg:text-text"
                        : "lg:text-text"
                    }`}
                >
                  {link.title}
                </a>
                ))
              }
            </div>

            <HamburgerMenu />
          </nav>
          { userInfo ? (
            <>
               <span className='w-[10rem]'>
                Hello, <button onClick={()=> setToggle(!toggle)} className="font-semibold">{userInfo.name}</button>
              </span>
              {
                toggle && (
                  <div className="w-[8rem] h-16 text-center bg-white absolute z-5 top-16 right-[7rem] border-2 rounded-md flex flex-col gap-1 justify-center">
                    <Link to='/profile'>Profile</Link>
                    <button onClick={logoutHandler}>Logout</button>
                  </div>
                )
              }
            </>
          ) : (
            <>
              <Link to="/register">
                <a
                  href="#signUp"
                  className="button hidden mr-8 text-text transition-colors hover:text-secondary lg:block"
                >
                  New account
                </a>
              </Link>

              <Link to="/login">
                <Button className="hidden lg:flex" href="#login">
                  Sign in
                </Button>
              </Link>
            </>
          )}
          <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation} >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;