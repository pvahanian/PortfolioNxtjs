import React from 'react';

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const fileUrl = '/PVResume.pdf'; 
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = 'PVResume.pdf'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <button onClick={handleDownload} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
      <img src="/assets/Resume.png" alt="Download Resume" style={{ width: '50px', height: '50px' }} />
    </button>
  );
};

export default DownloadButton;