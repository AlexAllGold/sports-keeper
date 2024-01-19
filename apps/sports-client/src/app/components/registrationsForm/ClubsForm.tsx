import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { createClub, fetchClub, updateClub } from '../../../api/clubs';
import { useAppDispatch } from '../../../hooks/redux';
import { CreateClub } from '../../../models/IClub';
import { useClubForm } from '../../../hooks/useClubForm';


export function ClubsForm() {
	const { id: clubId } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit, setValue, formState: { errors } } = useClubForm();

	useEffect( () => {
		if (clubId) {
			(async function async() {
				const data = await dispatch(fetchClub(clubId)).unwrap()
				setValue('name', data.name)
				setValue('address', data.address)
				setValue('description', data.description)
			})()
		}
	},[dispatch, clubId, setValue])
	const save: SubmitHandler<CreateClub> = async (model) => {
		const id: number = Number(clubId);
		const data = await dispatch(clubId ? updateClub({ id, ...model}) : createClub(model)).unwrap();
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		navigate(`/clubs/${data.id}`);
	};


	return (
		<div className='flex flex-col h-full p-10 border-t border-x border-[#CAD0D8] rounded-t-xl'>
			<h1 className='text-3xl font-medium'>
				{clubId ? 'Edit' : 'Register'} Club
			</h1>
			<form onSubmit={handleSubmit(save)}
						className='flex flex-col h-full w-96 py-20 m-auto border border-[#CAD0D8] rounded-xl'>
				<input className='Input-style' {...register('name')} placeholder='name'/>
				<p className='text-center text-red-600'>{errors.name?.message}</p>

				<input className='Input-style' {...register('address')} placeholder='address'/>
				<p className='text-center text-red-600'>{errors.address?.message}</p>

				 <textarea className='Input-style' {...register('description')} placeholder='description'/>
				<p className='text-center text-red-600'>{errors.description?.message}</p>

				<button className='button-style m-auto w-32' type='submit' onSubmit={handleSubmit(save)}>Create club</button>
			</form>
		</div>
	);
}
