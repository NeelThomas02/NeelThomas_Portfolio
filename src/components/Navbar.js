// src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="#home">Home</Link></li>
        <li><Link href="#about">About</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// const navbarStyle = {
//   position: 'fixed',
//   top: 0,
//   width: '100%',
//   backgroundColor: 'rgba(0, 0, 0, 0.7)',
//   padding: '10px 0',
//   textAlign: 'center',
//   zIndex: 1000,
// };

// const listStyle = {
//   listStyleType: 'none',
//   padding: 0,
//   margin: 0,
// };

export default Navbar;
