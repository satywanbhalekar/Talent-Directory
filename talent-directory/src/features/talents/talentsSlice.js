// src/features/talents/talentsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/talents';

// Async thunk to fetch talents (optionally filtered by skill)
export const fetchTalents = createAsyncThunk(
  'talents/fetchTalents',
  async (skill) => {
    const url = skill ? `${API_URL}?skill=${skill}` : API_URL;
    const response = await axios.get(url);
    return response.data;
  }
);

// Async thunk to add a new talent
export const addTalent = createAsyncThunk(
  'talents/addTalent',
  async (talent) => {
    const response = await axios.post(API_URL, talent);
    return response.data;
  }
);

const talentsSlice = createSlice({
  name: 'talents',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTalents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTalents.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTalents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTalent.pending, (state) => {
        state.error = null;
      })
      .addCase(addTalent.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(addTalent.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default talentsSlice.reducer;
