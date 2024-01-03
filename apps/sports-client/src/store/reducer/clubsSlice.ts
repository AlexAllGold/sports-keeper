import { createSlice } from '@reduxjs/toolkit';
import { IClub } from '../../models/IClub';
import { createClub, fetchAllClubs, fetchClub } from '../../api/clubs';

interface ClubState {
  currentClub: IClub | null;
  clubs: IClub[];
  loading: boolean;
  error: string;
}

const initialState: ClubState = {
  currentClub: null,
  clubs: [],
  loading: false,
  error: '',
};

export const clubsSlice = createSlice({
  name: 'club',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllClubs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.clubs = action.payload;
      })
      .addCase(fetchAllClubs.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchAllClubs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchClub.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.currentClub = action.payload;
      })
      .addCase(fetchClub.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchClub.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createClub.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.currentClub = action.payload;
      })
      .addCase(createClub.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(createClub.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default clubsSlice.reducer;
