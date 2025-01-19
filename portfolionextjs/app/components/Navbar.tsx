// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <div className="nav-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
      <Link href="/" passHref>
        <div style={{ cursor: 'pointer', width: '300px', height: 'auto' }}>
          <Image
            className="logo"
            src="/assets/NewIcon2.svg"
            alt="Pablo's Logo"
            width={300}
            height={75}
          />
        </div>
      </Link>
      <div className="nav-icons" style={{ display: 'flex', gap: '20px' }}>
        <a
          title="Email Me"
          href="mailto:pablo.vahanian@gmail.com"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '60px', height: '60px' }}
        >
          <Image src="/assets/Mail.svg" alt="Mail Icon" width={55} height={55} />
        </a>
        <a
          title="LinkedIn Page"
          href="https://www.linkedin.com/in/pablo-vahanian/"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '60px', height: '60px' }}
        >
          <Image src="/assets/Linkedin.svg" alt="LinkedIn Icon" width={55} height={55} />
        </a>
        <a
          title="Resume"
          href="/PVResume.pdf"
          download
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', width: '60px', height: '60px' }}
        >
          <Image src="/assets/Resume.png" alt="Resume Icon" width={55} height={55} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;