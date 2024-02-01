import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchAllClients, removeClient } from '../../../api/clients';


export function Clients() {
  const navigate = useNavigate()
  const { clubId} = useParams();
  const dispatch = useAppDispatch();
  const { clients, error, loading} = useAppSelector(state => state.client);
  useEffect(() => {
    dispatch(fetchAllClients(clubId))
  }, [dispatch, clubId]);

  const handleEditClick = (id: number| undefined) => () => {
    navigate(`${id}/update`);
  };
  const handleAllClientClick = (id: number| undefined) => () => {
    navigate(`/clubs/${clubId}/clients/${id}`);
  };
  const handleRemove = (id: number | undefined) => async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    await dispatch(removeClient({ clubId, id })).unwrap();
    dispatch(fetchAllClients(clubId))
  };

  return (
    <div className='flex flex-col gap-4 m-5'>
        <div className='flex flex-col gap-4'>
          <div className='flex-col'>
            <div className='flex flex-row justify-between'>
              <div>
                <p className='text-3xl font-medium'>
                  Clients
                </p>
                <p>
                  About All Clients
                </p>
              </div>
              <button type='button' onClick={() => navigate('/clients/create')}
                      className='button-style relative bg-[#0C42FC] w-40'>
                <svg className='absolute right-5 top-3 w-4 h-4 text-white dark:text-white' aria-hidden='true'
                     xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 18 18'>
                  <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
                        d='M9 1v16M1 9h16' />
                </svg>
                Create Client
              </button>
            </div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {clients.length === 0 &&
              <div className='h-full flex justify-center items-center'>
                <h1>Not Clients</h1>
              </div>
            }
            {clients.length > 0 &&
            <div className='flex border border-[#CAD0D8] rounded-md py-1'>
              <table className='flex flex-col w-full'>
                <thead className='flex border-b border-[#CAD0D8]'>
                <tr className='w-full flex justify-around'>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Club Id</th>
                  <th>Birth</th>
                </tr>
                </thead>
                <tbody className='w-full'>
                {
                  clients.map((client) => (
                    <tr className='flex h-10' key={client.id}>
                      <td className='w-1/6 border-t border-x border-[#CAD0D8]'>
                        {client.firstName}
                      </td>
                      <td className='w-1/6 border-t border-x border-[#CAD0D8]'>
                        {client.lastName}
                      </td>
                      <td className='w-1/6 border-t border-x border-[#CAD0D8]'>
                        {client.email}
                      </td>
                      <td className='w-1/6 border-t border-x border-[#CAD0D8]'>
                        {client.clubId}
                      </td>
                      <td className='w-1/6 border-t border-x border-[#CAD0D8]'>
                        {client.dateOfBirth.toLocaleString()}
                      </td>
                      <td>
                        <button type='button' className='button-style relative bg-[#0C42FC] w-10'
                                onClick={handleEditClick(client.id)}>
                          Edit
                        </button>
                      </td>
                      <td>
                        <button type='button' className='button-style relative bg-[#0C42FC] w-10'
                                onClick={handleRemove(client.id)}>
                          Remove
                        </button>
                      </td>
                      <td>
                        <button type='button' className='button-style relative bg-[#0C42FC] w-10'
                                onClick={handleAllClientClick(client.id)}>
                          About
                        </button>
                      </td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
            }
          </div>
        </div>
      </div>
    );

}
