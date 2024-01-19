import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateClub } from '../models/IClub';

const schema = yup
	.object({
		name: yup.string().required(),
		address: yup.string().required(),
		description: yup.string().required(),
	})
	.required();

export const useClubForm = () => useForm<CreateClub>(
	{
		resolver: yupResolver<CreateClub>(schema),
		defaultValues: {
			name: '',
			address: '',
			description: ''
		}
	});
