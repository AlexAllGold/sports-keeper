import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAllClubs } from '../../../api/clubs';

export function Clubs() {
  const dispatch = useAppDispatch();
  const {clubs, error, loading} = useAppSelector(state => state.clubReducer);

  useEffect(() => {
    dispatch(fetchAllClubs())
  }, [dispatch]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex-col'>
          <p className='text-3xl font-medium'>
            Clubs
          </p>
          <p>
            About All Clubs
          </p>
          {loading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          <div className='flex border border-[#CAD0D8] rounded-md py-1'>
            <table className='flex flex-col w-full'>
              <thead className='flex border-b border-[#CAD0D8]'>
              <tr className='w-full flex justify-around'>
                <th>Name</th>
                <th>Description</th>
                <th>Address</th>
              </tr>
              </thead>
              <tbody className='w-full'>
              {
                clubs.map((club) => (
                  <tr className='flex h-10' key={club.id}>
                    <td className='w-1/3 border-t border-x border-[#CAD0D8]'>
                      {club.name}
                    </td>
                    <td className='w-1/3 border-t border-x border-[#CAD0D8]'>
                      {club.description}
                    </td>
                    <td className='w-1/3 border-t border-x border-[#CAD0D8]'>
                      {club.address}
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
