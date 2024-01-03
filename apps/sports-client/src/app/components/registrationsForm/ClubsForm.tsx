import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createClub } from '../../../api/clubs';
import { useAppDispatch } from '../../../hooks/redux';
import { CreateClub } from '../../../models/IClub';

const schema = yup
	.object({
		name: yup.string().required(),
		address: yup.string().required(),
		description: yup.string().required(),
	})
	.required();

export function ClubsForm() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit, formState: { errors } } = useForm<CreateClub>(
		{ resolver: yupResolver(schema) });

	const save: SubmitHandler<CreateClub> = async (model) => {
		const data = await dispatch(createClub(model)).unwrap();
		navigate(`/clubs/${data.id}`);
	};

	return (
		<div className='flex flex-col h-full p-10 border-t border-x border-[#CAD0D8] rounded-t-xl'>
			<h1 className='text-3xl font-medium'>
				Register Text
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
