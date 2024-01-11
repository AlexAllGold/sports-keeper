import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateClub, IClub } from '../models/IClub';

export const fetchAllClubs = createAsyncThunk(
  'club/fetchAll',
   async (_, thunkAPI) => {
    try {
      const response = await axios.get<IClub[]>('http://localhost:8000/api/clubs')
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Не удалось загрузить Clubs')
    }
  }
)

export const fetchClub = createAsyncThunk(
  'club/fetchOne',
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<IClub>(`http://localhost:8000/api/clubs/${id}`)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(`Не удалось загрузить Club${id}`)
    }
  }
)

export const createClub = createAsyncThunk(
  'club/createClub',
  async (club: CreateClub, thunkAPI) => {
    const {name, description, address} = club;
    try {
      const response = await axios.post<CreateClub>('http://localhost:8000/api/clubs', {
        name,
        description,
        address,
      })
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Не удалось создать Club   ')
    }
  }
)

export const updateClub = createAsyncThunk(
  'club/updateClub',
  async (club: IClub, thunkAPI) => {
    const {id, name, description, address} = club;
    try {
      const response = await axios.put<IClub>(`http://localhost:8000/api/clubs/${id}`, {
        id,
        name,
        description,
        address,
      })
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(`Не удалось обновить Club   ${  err}`)
    }
  }
)
export const removeClub = createAsyncThunk(
  'club/remove',
  async (id: string, thunkAPI) => {
    try {

      const response = await axios.delete<IClub>(`http://localhost:8000/api/clubs/${id}`)
      return response.data
    } catch (err) {
      return thunkAPI.rejectWithValue(`Не удалось удалить Club${id}`)
    }
  }
)
