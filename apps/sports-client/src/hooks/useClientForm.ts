import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateClient } from '../models/IClient';

const schema = yup
	.object({
		firstName: yup.string().required(),
		lastName: yup.string().required(),
		email: yup.string().required(),
		clubId: yup.number().required(),
		dateOfBirth: yup.date().required()
	})
	.required();

export const useClientForm = () => useForm<CreateClient>(
	{
		resolver: yupResolver<CreateClient>(schema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			clubId: 1,
			dateOfBirth: new Date(),
		},
	});
