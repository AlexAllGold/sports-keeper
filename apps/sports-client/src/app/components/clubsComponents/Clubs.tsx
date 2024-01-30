import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux';
import { fetchAllClubs, removeClub } from '../../../api/clubs';
import { useClub } from '../../../hooks/useClub';

export function Clubs() {
  const navigate = useNavigate()
  const { clubs, error, loading} = useClub();
  const dispatch = useAppDispatch();

	const handleEditClick = (id: number) => () => {
		navigate(`/clubs/${id}/update`);
	};
  const handleAllClientClick = (clubId: number) => () => {
    navigate(`/clubs/${clubId}/clients`);
  };
  const handleRemove = (id: number) => async () => {
		await dispatch(removeClub(id.toString())).unwrap();
    dispatch(fetchAllClubs())
  };

  if (clubs.length === 0) {
    return (
      <h1>Not Found this Club</h1>
    )
  }
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4'>
        <div className='flex-col'>
          <div className='flex flex-row justify-between'>
            <div>
          <p className='text-3xl font-medium'>
            Clubs
          </p>
          <p>
            About All Clubs
          </p>
            </div>
            <button type='button' onClick={()=>navigate('/clubs/create')} className='button-style relative bg-[#0C42FC] w-40'>
              <svg className='absolute right-5 top-3 w-4 h-4 text-white dark:text-white' aria-hidden='true'
                   xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                      d='M9 1v16M1 9h16' />
              </svg>
              Create Club
            </button>
          </div>
          {loading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1>}
          <div className='flex border border-[#CAD0D8] rounded-md py-1'>
            <table className='flex flex-col w-full'>
              <thead className='flex border-b border-[#CAD0D8]'>
              <tr className='w-full flex justify-around'>
                <th>Name</th>
                <th>Description</th>
                <th>Address</th>
                <th>Settings</th>
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
                    <td>
											<button type='button' className='button-style relative bg-[#0C42FC] w-10'
															onClick={handleEditClick(club.id as number)}>
												Edit
											</button>
                    </td>
                    <td>
											<button type='button' className='button-style relative bg-[#0C42FC] w-10'
															onClick={handleRemove(club.id as number)}>
                        Remove
											</button>
                    </td>
                    <td>
                      <button type='button' className='button-style relative bg-[#0C42FC] w-10'
                              onClick={handleAllClientClick(club.id as number)}>
                        All
                      </button>
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
