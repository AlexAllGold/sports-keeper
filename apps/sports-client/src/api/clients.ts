import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { CreateClient, IClient } from '../models/IClient';
import 'react-toastify/dist/ReactToastify.css';

export const fetchAllClients = createAsyncThunk(
  'client/fetchAll',
  async (clubId: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<IClient[]>(`http://localhost:8000/api/clubs/${clubId}/clients`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue('Не удалось загрузить Clients');
    }
  },
);

export const fetchClient = createAsyncThunk(
  'client/fetchOne',
  async (client: IClient, thunkAPI) => {
    const {id, clubId} = client;
    try {
      const response = await axios.get<IClient>(`http://localhost:8000/api/clubs/${clubId}/clients/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(`Не удалось загрузить Client${id}`);
    }
  },
);

export const createClient = createAsyncThunk(
  'client/createClient',
  async (client: CreateClient, thunkAPI) => {
    const { firstName, lastName, email, clubId, dateOfBirth } = client;
    try {
      const response = await axios.post<CreateClient>(`http://localhost:8000/api/clubs/${clubId}/clients`, {
        firstName,
        lastName,
        email,
        clubId,
        dateOfBirth,
      });
      toast.success('Создан новый Client', {});
      return response.data;
    } catch (err) {
      toast.error(`Не удалось создать Client`, {});
      return thunkAPI.rejectWithValue('Не удалось создать Client');
    }
  },
);

export const updateClient = createAsyncThunk(
  'client/updateClient',
  async (client: IClient, thunkAPI) => {
    const { id, firstName, lastName, email, clubId, dateOfBirth } = client;
    try {
      const response = await axios.put<IClient>(`http://localhost:8000/api/clubs/${clubId}/clients/${id}`, {
        id,
        clubId,
        firstName,
        lastName,
        email,
        dateOfBirth,
      });
      toast.success('Client обновлен!', {});
      return response.data;
    } catch (err) {
      toast.error(`Не удалось обновить Client`, {});
      return thunkAPI.rejectWithValue(`Не удалось обновить Client ${err}`);
    }
  },
);
export const removeClient = createAsyncThunk(
  'client/remove',
  async (client: IClient, thunkAPI) => {
    const { clubId, id } = client;
    try {

      const response = await axios.delete<IClient>(`http://localhost:8000/api/clubs/${clubId}/clients/${id}`);
      toast.success('Client Успешно Удален!', {});
      return response.data;
    } catch (err) {
      toast.error(`Не удалось удалить Client`, {});
      return thunkAPI.rejectWithValue(`Не удалось удалить Client${id}`);
    }
  },
);
