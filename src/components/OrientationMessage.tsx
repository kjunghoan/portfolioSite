import React from 'react';

const OrientationMessage: React.FC = () => {
  return (
    <div
      id="orientation-message"
      className="fixed inset-0 z-50 items-center justify-center bg-black bg-opacity-90 hidden"
    >
      <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg text-center max-w-sm mx-4">
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-500 animate-pulse"
          >
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <path d="M12 18h.01"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold mb-2 dark:text-white">
          Please Rotate Your Device
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          This website is best viewed in portrait mode. Please rotate your
          device.
        </p>
      </div>
    </div>
  );
};

export default OrientationMessage;
