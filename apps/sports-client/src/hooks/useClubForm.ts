import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateClub } from '../models/IClub';

const schema = yup
	.object({
		name: yup.string().required().min(4).max(50),
		address: yup.string().required().min(4).max(50),
		description: yup.string().required().min(4).max(50),
	})
	.required();

export const useClubForm = () =>
	useForm<CreateClub>({
		resolver: yupResolver<CreateClub>(schema),
		mode: 'onChange',
		defaultValues: {
			name: '',
			address: '',
			description: '',
		},
	});
