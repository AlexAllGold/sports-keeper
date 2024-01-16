import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createClient, fetchClient, updateClient } from '../../../api/clients';
import { useAppDispatch } from '../../../hooks/redux';
import { CreateClient } from '../../../models/IClient';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    clubId: yup.number().required(),
    dateOfBirth: yup.date().required()
  })
  .required();


export function ClientsForm() {
  const { clubId, clientId } = useParams();
  const id = Number(clientId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateClient>(
    {
      resolver: yupResolver<CreateClient>(schema),
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        clubId: 0,
        dateOfBirth: new Date(),
      }
    });

  useEffect( () => {
    if (id) {
      (async () => {
        const data = await dispatch(fetchClient({ clubId, id })).unwrap()
        setValue('firstName', data.firstName)
        setValue('lastName', data.lastName)
        setValue('email', data.email)
        setValue('clubId', data.clubId)
        setValue('dateOfBirth', data.dateOfBirth)
      })()
    }
  },[dispatch, clubId, setValue, id])
  const save: SubmitHandler<CreateClient> = async (model) => {
    const data = await dispatch(id ? updateClient({ id, ...model}) : createClient(model)).unwrap();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    navigate(`/clubs/${data.clubId}/clients/${data.id}`);
  };


  return (
    <div className='flex flex-col h-full p-10 border-t border-x border-[#CAD0D8] rounded-t-xl'>
      <h1 className='text-3xl font-medium'>
        {clubId ? 'Edit' : 'Register'} Client
      </h1>
      <form onSubmit={handleSubmit(save)}
            className='flex flex-col h-full w-96 py-20 m-auto border border-[#CAD0D8] rounded-xl'>
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

        <button className='button-style m-auto w-32' type='submit' onSubmit={handleSubmit(save)}>Create client</button>
      </form>
    </div>
  );
}
