import React from 'react';
import { Link } from 'react-router-dom';

export function Bar() {
  return (
    <div className='flex flex-col border-r border-[#CAD0D8]'>
      <div className='h-20 flex flex-row'>
        <div className='ml-3 my-5 h-11 p-0.5 w-14 rounded-xl bg-[#0C42FC]'>
          <img className='h-10 w-16' src='../../../../public/images/logo.png' alt='Logo' />
        </div>
        <div className='ml-5 my-3'>
          <p className='font-bold text-3xl'>
            Sports-Keeper
          </p>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-col py-3.5 px-4 gap-4'>
          <Link className='link-bar-hover-style py-2' to='/'>
            <svg className='ml-2 w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'
                    d='M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9' />
            </svg>
            <p className='p-link-style'>Home</p>
          </Link>
          <Link className='link-bar-hover-style flex py-2' to='/clubs'>
            <svg className='ml-2 w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'
                    d='M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z' />
            </svg>
            <p className='p-link-style'>Clubs</p>
          </Link>
          <Link className='link-bar-hover-style flex py-2' to='/clients'>
            <svg className='ml-2 w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'
                    d='M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z' />
            </svg>
            <p className='p-link-style'>Clients</p>
          </Link>
          <div className='mt-14 mb-10 border-t border-[#CAD0D8]' />
          <Link className='link-bar-hover-style flex py-2' to='/support'>
            <svg className='ml-2 w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'
                    d='m12.46 7.291 3.849-3.849a1.5 1.5 0 0 1 2.122 0l.127.127a1.5 1.5 0 0 1 0 2.122l-3.839 3.838a4 4 0 0 0-2.259-2.238Zm0 0a4 4 0 0 1 2.263 2.238l3.662-3.662a8.96 8.96 0 0 1 0 10.27l-3.676-3.676m-2.249-5.17 3.677-3.676a8.96 8.96 0 0 0-10.27 0l3.662 3.662a4 4 0 0 0-2.238 2.258L3.615 5.863a8.961 8.961 0 0 0 0 10.27l3.662-3.662a4 4 0 0 0 2.258 2.238l-3.672 3.676a8.96 8.96 0 0 0 10.27 0l-3.662-3.662a4 4 0 0 0 2.238-2.262m0 0 3.849 3.848a1.499 1.499 0 0 1 0 2.122l-.127.126a1.5 1.5 0 0 1-2.122 0l-3.838-3.838a4 4 0 0 0 2.238-2.258ZM15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-7.719 1.471-3.839 3.838a1.5 1.5 0 0 0 0 2.122l.127.126a1.5 1.5 0 0 0 2.122 0l3.848-3.848a4 4 0 0 1-2.258-2.238Zm2.248-5.19L5.691 3.442a1.5 1.5 0 0 0-2.122 0l-.127.127a1.5 1.5 0 0 0 0 2.122l3.849 3.848a4 4 0 0 1 2.238-2.258Z' />
            </svg>
            <p className='p-link-style'>Support</p>
          </Link>
          <Link className='link-bar-hover-style flex py-2' to='/notification'>
            <svg className='ml-2 w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 21'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'
                    d='M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z' />
            </svg>
            <p className='p-link-style'>Notification</p>
          </Link>
          <Link className='link-bar-hover-style flex py-2' to='/setting'>
            <svg className='ml-2 w-5 h-5 text-gray-800 dark:text-white' aria-hidden='true'
                 xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
              <g stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1'>
                <path
                  d='M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z' />
                <path d='M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
              </g>
            </svg>
            <p className='p-link-style'>Setting</p>
          </Link>
        </div>
        <div className='flex flex-col ml-10 m-14'>
          <p className='text-xl'>
            Current User
          </p>
        </div>
      </div>
    </div>
  );
}
