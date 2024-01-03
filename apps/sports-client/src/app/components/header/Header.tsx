import React from 'react';

const arr = ['Overview', 'Table', 'List view', 'Segment']

function Header() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='h-28 flex flex-row justify-between'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='text-3xl font-medium'>
            Customers
          </h1>
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className='flex flex-row justify-center items-center'>
          <div className='flex gap-4'>
            <button type='button' className='button-style relative bg-[#0C42FC] w-40'>
              <svg className='absolute right-5 top-3 w-4 h-4 text-white dark:text-white' aria-hidden='true'
                   xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='M9 1v16M1 9h16' />
              </svg>
              add Text
            </button>
          </div>
        </div>
      </div>
      <div className='flex h-11 px-1 bg-[#EBEFFD] border border-[#CAD0D8] rounded-xl'>
        <div className='flex flex-row w-full justify-between items-center gap-x-1'>
          {arr.map(item => (
            <div key={item} className='w-full flex items-center justify-center h-9 hover:bg-white rounded-xl'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
