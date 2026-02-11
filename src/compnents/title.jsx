import React from 'react';

const title = ({children}) => {
    return (
        <div className='bg-linear-60 from-sky-50 to-sky-200 py-3 text-black'>
          <h2 className='text-5xl font-black'> {children}</h2>
        </div>
    );
};

export default title;