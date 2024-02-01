import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { createClient, fetchClient, updateClient } from '../../../api/clients';
import { useAppDispatch } from '../../../hooks/redux';
import { CreateClient } from '../../../models/IClient';
import { useClientForm } from '../../../hooks/useClientForm';

export function ClientsForm() {
  const { clubId , clientId: id } = useParams();
  const idAsNumber = parseInt(id as string, 10);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useClientForm();

  useEffect( () => {
    if (id) {
      (async () => {
        const data = await dispatch(fetchClient({ clubId, id: idAsNumber })).unwrap()
        setValue('firstName', data.firstName)
        setValue('lastName', data.lastName)
        setValue('email', data.email)
        setValue('clubId', data.clubId)
        setValue('dateOfBirth', data.dateOfBirth)
      })()
    }
  },[dispatch, clubId, setValue, id, idAsNumber])
  const save: SubmitHandler<CreateClient> = async (model) => {
    const data = await dispatch(id ? updateClient({ id: idAsNumber, ...model}) : createClient(model)).unwrap();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(`/clubs/${data.clubId}/clients/${data.id}`);
  };


  return (
    <div className='flex flex-col h-full  pb-14 px-32'>
      <h1 className='flex m-5 justify-center text-3xl font-medium'>
        {clubId ? 'Edit' : 'Register'} Client
      </h1>
      <form onSubmit={handleSubmit(save)}
            className='flex flex-col h-full w-full gap-4 px-14 py-12 m-auto border border-[#CAD0D8] rounded-xl'>
        <input className='Input-style' {...register('firstName')} placeholder='first name'/>
        <p className='text-center text-red-600'>{errors.firstName?.message}</p>

        <input className='Input-style' {...register('lastName')} placeholder='last name'/>
        <p className='text-center text-red-600'>{errors.lastName?.message}</p>

        <input className='Input-style' {...register('email')} placeholder='email'/>
        <p className='text-center text-red-600'>{errors.email?.message}</p>

        <input className='Input-style' {...register('clubId')} placeholder='club id'/>
        <p className='text-center text-red-600'>{errors.clubId?.message}</p>

        <input className='Input-style' {...register('dateOfBirth')} placeholder='date of birth'/>
        <p className='text-center text-red-600'>{errors.dateOfBirth?.message}</p>

        <button className='button-style m-auto w-32' type='submit' onSubmit={handleSubmit(save)}>{clubId ? 'Edit' : 'Register'} Client</button>
      </form>
    </div>
  );
}
