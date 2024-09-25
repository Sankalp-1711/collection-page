// import React, { useState } from 'react';
// import { Heart, BriefcaseBusiness, User, Search, Menu, X } from 'lucide-react';
// // import { useLocation } from 'react-router-dom';
// import './Navbar.scss';
// import navimg from '../../assets/nav.png'

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const location = useLocation();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const isHomePage = location.pathname === '/';

//   return (
//     <header className={`navbar 'navbar--transparent' }`}>
//       <div className="navbar__container">
//         <div className="navbar__branding">
//           {/* <span className={`navbar__title  'navbar__title--white' }`}>
//             PRITAM NAYAK
//           </span>
//           <br/>
//           <span className="navbar__subtitle">COUTURE</span> */}
//           <img src={navimg} />
//         </div>

//         {/* <button className="navbar__menu-button" onClick={toggleMobileMenu}>
//           <Menu />
//         </button> */}
//       </div>

//       {/* Mobile Menu */}
//       {/* <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
//         <button className="navbar__close-button" onClick={toggleMobileMenu}>
//           <X />
//         </button>

//         <nav>
//           {['NEW IN', 'COLLECTION', 'ACCESSORIES', 'RUNWAY', 'VOWS', 'ABOUT'].map((item, index) => (
//             <a key={index} href="/" className="navbar__link" onClick={toggleMobileMenu}>
//               {item}
//             </a>
//           ))}
//         </nav>

//         <div className="navbar__icons">
//           <Heart className="navbar__icon" />
//           <BriefcaseBusiness className="navbar__icon" />
//           <User className="navbar__icon" />
//         </div>
//       </div> */}

//       {/* Desktop Menu */}
//       <div className="navbar__desktop-menu">
//         <div className="navbar__search">
//           <Search />
//           <input type="text" placeholder="SEARCH ...." className="navbar__search-input" />
//         </div>

//         <nav>
//           {['NEW IN', 'COLLECTION', 'ACCESSORIES', 'RUNWAY', 'VOWS', 'ABOUT'].map((item, index) => (
//             <a  key={index} href="/" className="navbar__link">
//               {item}
//             </a>
//           ))}
//         </nav>

//         <div className="navbar__icons">
//           <Heart className="navbar__icon" />
//           <BriefcaseBusiness className="navbar__icon" />
//           <User className="navbar__icon" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Heart, BriefcaseBusiness, User, Search, Menu, X } from 'lucide-react';
import './Navbar.scss';
import navimg from '../../assets/nav.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__branding">
          <img src={navimg} alt="Brand" />
        </div>

        {/* Mobile Menu Button */}
        <div className='menu-search'>
        <button className="navbar__menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
        { isMobileMenuOpen ?
        <div className="navbar__search">
          <Search />
          <input type="text" placeholder="SEARCH ...." className="navbar__search-input" />
        </div>
:''}
        </div>
        
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
     
        <nav>
          {['NEW IN', 'COLLECTION', 'ACCESSORIES', 'RUNWAY', 'VOWS', 'ABOUT'].map((item, index) => (
            <a key={index} href="/" className="navbar__link" onClick={toggleMobileMenu}>
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar__icons">
          <Heart className="navbar__icon" />
          <BriefcaseBusiness className="navbar__icon" />
          <User className="navbar__icon" />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar__desktop-menu">
        <div className="navbar__search">
          <Search />
          <input type="text" placeholder="SEARCH ...." className="navbar__search-input" />
        </div>

        <nav>
          {['NEW IN', 'COLLECTION', 'ACCESSORIES', 'RUNWAY', 'VOWS', 'ABOUT'].map((item, index) => (
            <a key={index} href="/" className="navbar__link">
              {item}
            </a>
          ))}
        </nav>

        <div className="navbar__icons">
          <Heart className="navbar__icon" />
          <BriefcaseBusiness className="navbar__icon" />
          <User className="navbar__icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
