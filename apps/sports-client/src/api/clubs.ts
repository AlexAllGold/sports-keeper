import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { CreateClub, IClub } from '../models/IClub';
import 'react-toastify/dist/ReactToastify.css';

const clubsApiAxios = axios.create({baseURL: 'http://localhost:8000/api/clubs'})
clubsApiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status < 500 && error.response.status > 300) {
      toast.warning(error.response.data)
    } else {
      toast.error(error.response.data);
    }
  }
)


export const fetchAllClubs = createAsyncThunk(
  'club/fetchAll',
   async (_) => {
      const response = await clubsApiAxios.get<IClub[]>('')
      return response.data
    }
)

export const fetchClub = createAsyncThunk(
  'club/fetchOne',
  async (id: string | undefined) => {
      const response = await clubsApiAxios.get<IClub>(`/${id}`)
      return response.data
  }
)

export const createClub = createAsyncThunk(
  'club/createClub',
  async (club: CreateClub) => {
    const {name, description, address} = club;
      const response = await clubsApiAxios.post<CreateClub>('',  {
        name,
        description,
        address,
      })
      return response.data
  }
)

export const updateClub = createAsyncThunk(
  'club/updateClub',
  async (club: IClub) => {
    const {id, name, description, address} = club;
      const response = await clubsApiAxios.put<IClub>(`/${id}`, {
        id,
        name,
        description,
        address,
      })
      return response.data
    }
)
export const removeClub = createAsyncThunk(
  'club/remove',
  async (id: string) => {
      const response = await clubsApiAxios.delete<IClub>(`/${id}`)
      toast.success('Клуб Успешно Удален!', {});
      return response.data
    }
)
