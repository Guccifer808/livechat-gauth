import React from 'react';

const LoginPage = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            Currently we support only Google authentication. Please login to
            join the conversations, find new friends and share ideas!
          </p>
        </div>
        <div className='form-control mt-6'>
          <button className='btn btn-primary'>Login with Google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
