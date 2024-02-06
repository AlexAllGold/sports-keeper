import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateClient } from '../models/IClient';

const schema = yup
	.object({
		firstName: yup.string().required().min(4).max(50),
		lastName: yup.string().required().min(4).max(50),
		email: yup.string().email().required(),
		clubId: yup.number().required(),
		dateOfBirth: yup.date().required(),
	})
	.required();

export const useClientForm = (clubId: string) =>
	useForm<CreateClient>({
		resolver: yupResolver<CreateClient>(schema),
		mode: 'onChange',
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			clubId: parseInt(clubId, 10),
			dateOfBirth: new Date(),
		},
	});
