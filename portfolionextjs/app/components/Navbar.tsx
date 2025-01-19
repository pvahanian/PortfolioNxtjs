// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="nav-bar">
      <Link href="/" passHref>
        <img
          className="logo"
          src="/assets/NewIcon2.svg"
          alt="Pablo's Logo"
          style={{ cursor: 'pointer', width: '300px' }}
        />
      </Link>
      <div className="nav-icons" style={{ display: 'flex', gap: '10px' }}>
        <a
          title="Email Me"
          href="mailto:pablo.vahanian@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/Mail.svg" alt="Mail Icon" style={{ width: '55px', height: '55px' }} />
        </a>
        <a
          title="LinkedIn Page"
          href="https://www.linkedin.com/in/pablo-vahanian/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/Linkedin.svg" alt="LinkedIn Icon" style={{ width: '55px', height: '55px' }} />
        </a>
        <a
          title="Resume"
          href="/PVResume.pdf"
          download
        >
          <img src="/assets/Resume.png" alt="Resume Icon" style={{ width: '55px', height: '55px' }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
