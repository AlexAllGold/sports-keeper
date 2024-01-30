import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateUser, IUser } from '../models/IUser';
import 'react-toastify/dist/ReactToastify.css';

const registerApiAxios = axios.create({baseURL: 'http://localhost:8000/api/register'})
// registerApiAxios.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		if (error.response.status === 401) {
// 			toast.warning('401')
// 			// here to cod for token
// 			const response = await
// 		} else if (error.response.status === 403) {
// 			toast.error('Not found User');
// 			// error
// 		}
// 	}
// );

export const fetchRegister = createAsyncThunk(
	'user/fetchOne',
	async (id: string | undefined) => {
		const response = await registerApiAxios.get<IUser>(`/${id}`)
		return response.data
	}
)

export const createUser = createAsyncThunk(
	'user/create',
	async (user: CreateUser) => {
		const {email, pass} = user;
		const response = await registerApiAxios.post<CreateUser>('',  {
			email,
			pass
		})
		return response.data
	}
)
