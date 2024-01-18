import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { CreateClient, IClient } from '../models/IClient';
import 'react-toastify/dist/ReactToastify.css';


const clientsApiAxios = axios.create({baseURL: 'http://localhost:8000/api/clubs/'})
clientsApiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status < 500 && error.response.status > 300) {
      toast.warning(error.response.data)
    } else {
      toast.error(error.response.data);
    }
  }
)
export const fetchAllClients = createAsyncThunk(
  'client/fetchAll',
  async (clubId: string | undefined) => {
      const response = await clientsApiAxios.get<IClient[]>(`${clubId}/clients`);
      return response.data;
  },
);

export const fetchClient = createAsyncThunk(
  'client/fetchOne',
  async (client: IClient) => {
    const {id, clubId} = client;
      const response = await clientsApiAxios.get<IClient>(`${clubId}/clients/${id}`);
      return response.data;
  },
);

export const createClient = createAsyncThunk(
  'client/createClient',
  async (client: CreateClient) => {
    const { firstName, lastName, email, clubId, dateOfBirth } = client;
      const response = await clientsApiAxios.post<CreateClient>(`${clubId}/clients`, {
        firstName,
        lastName,
        email,
        clubId,
        dateOfBirth,
      });
      return response.data;
  },
);

export const updateClient = createAsyncThunk(
  'client/updateClient',
  async (client: IClient) => {
    const { id, firstName, lastName, email, clubId, dateOfBirth } = client;
      const response = await clientsApiAxios.put<IClient>(`${clubId}/clients/${id}`, {
        id,
        clubId,
        firstName,
        lastName,
        email,
        dateOfBirth,
      });
      return response.data;
  },
);
export const removeClient = createAsyncThunk(
  'client/remove',
  async (client: IClient) => {
    const { clubId, id } = client;
      const response = await clientsApiAxios.delete<IClient>(`${clubId}/clients/${id}`);
      return response.data ? response.data : toast.success('Client Успешно Удален!', {});
  },
);
