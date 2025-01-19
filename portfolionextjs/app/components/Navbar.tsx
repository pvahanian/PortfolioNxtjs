// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="nav-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', padding: '10px 20px' }}>
      <Link href="/" passHref>
        <img
          className="logo"
          src="/assets/NewIcon2.svg"
          alt="Pablo's Logo"
          style={{ cursor: 'pointer', width: '300px' }}
        />
      </Link>
      <div className="nav-icons" style={{ display: 'flex', gap: '20px' }}>
        <a
          title="Email Me"
          href="mailto:pablo.vahanian@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#e8f5fe', width: '60px', height: '60px' }}
        >
          <img src="/assets/Mail.svg" alt="Mail Icon" style={{ width: '55px', height: '55px' }} />
        </a>
        <a
          title="LinkedIn Page"
          href="https://www.linkedin.com/in/pablo-vahanian/"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#e8f5fe', width: '60px', height: '60px' }}
        >
          <img src="/assets/Linkedin.svg" alt="LinkedIn Icon" style={{ width: '55px', height: '55px' }} />
        </a>
        <a
          title="Resume"
          href="/PVResume.pdf"
          download
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', backgroundColor: '#e8f5fe', width: '60px', height: '60px' }}
        >
          <img src="/assets/Resume.png" alt="Resume Icon" style={{ width: '55px', height: '55px' }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
