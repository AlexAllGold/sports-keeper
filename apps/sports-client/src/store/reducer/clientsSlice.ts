import { createSlice } from '@reduxjs/toolkit';
import { IClient } from '../../models/IClient';
import { createClient, fetchAllClients, fetchClient, removeClient, updateClient } from '../../api/clients';

interface ClientState {
  currentClient: IClient | null;
  clients: IClient[];
  loading: boolean;
  error: string;
}

const initialState: ClientState = {
  currentClient: null,
  clients: [],
  loading: false,
  error: '',
};

export const clientsSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClients.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.clients = action.payload;
      })
      .addCase(fetchAllClients.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAllClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchClient.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.currentClient = action.payload;
      })
      .addCase(fetchClient.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createClient.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.currentClient = action.payload;
      })
      .addCase(createClient.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(createClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.currentClient = action.payload;
      })
      .addCase(updateClient.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(updateClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(removeClient.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.clients = state.clients.filter((currentClient) => currentClient.id !== action.payload.id)
      })
      .addCase(removeClient.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(removeClient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default clientsSlice.reducer;
