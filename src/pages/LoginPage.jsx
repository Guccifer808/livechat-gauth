import React from 'react';

const LoginPage = () => {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-6 text-5xl font-bold'>Welcome!</h1>
          <p className='mb-6'>
            Currently we support only Google authentication. Please login to
            join the conversations, find new friends and share ideas!
          </p>
          <button className='btn btn-primary'>Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
