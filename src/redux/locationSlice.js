import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { constants } from '../constants';

const { baseUrl } = constants;

export const fetchLocation = createAsyncThunk(
  'users/fetchByIdStatus',
  async ({ type, value }, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/search/?${type}=${value}`);
      const woeid = response.data?.[0]?.woeid
      if (!woeid) {
        throw new Error('search location is not found');
      }
      const weather = await axios.get(`${baseUrl}/${woeid}`);
      return weather.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message, error);
    }
  }
);

export const locationSlice = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
    title: '',
    time: '',
    temp: '',
    isCelsiusMode: true,
    error: null,
    weathers: []
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setTempMode: (state, action) => {
      state.isCelsiusMode = action.payload;
    },
    setWeather: (state, action) => {
      state.weathers = action.payload
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchLocation.fulfilled]: (state, action) => {
      // Add user to the state array
      state.loading = false;
      state.weathers = action.payload.consolidated_weather;
      state.title = action.payload.title;
      state.time = action.payload.time;
      state.temp = action.payload.the_temp;
      state.error = null;
    },
    [fetchLocation.pending]: (state, { meta }) => {
      state.loading = true;
      state.error = null;
    },
    [fetchLocation.rejected]: (state, { meta, payload, error }) => {
      state.loading = false;
      state.error = payload;
    }
  },
});

export const { setLocation, setTempMode, setWeather } = locationSlice.actions;

export const selectWeather = (state) => state.weather;
export const selectIsCelsius = (state) => state.weather.isCelsiusMode;
export const selectIsLoading = (state) => state.weather.loading;

export default locationSlice.reducer;
