import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { createClub, fetchAllClubs, fetchClub, updateClub } from '../../../api/clubs';
import { useAppDispatch } from '../../../hooks/redux';
import { CreateClub } from '../../../models/IClub';
import { useClubForm } from '../../../hooks/useClubForm';

export function ClubsForm() {
	const { id: clubId } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useClubForm();

	useEffect(() => {
		if (clubId) {
			(async function async() {
				const data = await dispatch(fetchClub(clubId)).unwrap();
				setValue('name', data.name);
				setValue('address', data.address);
				setValue('description', data.description);
			})();
		}
	}, [dispatch, clubId, setValue]);
	const save: SubmitHandler<CreateClub> = async (model) => {
		const id: number = Number(clubId);
		const data = await dispatch(clubId ? updateClub({ id, ...model }) : createClub(model)).unwrap();
		dispatch(fetchAllClubs());
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		navigate(`/clubs/${data.id}`);
	};

	return (
		<div className="flex flex-col h-full pb-14 px-32">
			<h1 className="flex justify-center align-top text-3xl font-medium my-3">{clubId ? 'Edit' : 'Register'} Club</h1>
			<form onSubmit={handleSubmit(save)} className="flex flex-col w-full gap-0.5 p-10 m-auto border border-[#CAD0D8] rounded-xl">
				<p className="pl-10 text-blue-600">Name</p>
				<input className="Input-style w-full" {...register('name')} />
				<p className="text-center text-red-600">{errors.name?.message}</p>

				<p className="pl-10 text-blue-600">address</p>
				<input className="Input-style w-full" {...register('address')} />
				<p className="text-center text-red-600">{errors.address?.message}</p>

				<p className="pl-10 text-blue-600">description</p>
				<textarea className="Textarea-style" {...register('description')} />
				<p className="text-center text-red-600">{errors.description?.message}</p>

				<div className="flex flex-row">
					<button className="button-style m-auto mt-5 w-32" type="submit">
						Cancel
					</button>

					<button className="button-style m-auto mt-5 w-32" type="submit" onSubmit={handleSubmit(save)}>
						{clubId ? 'Edit' : 'Register'}
					</button>
				</div>
			</form>
		</div>
	);
}
