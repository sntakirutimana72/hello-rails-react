import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { pendingEffect, fulfilledEffect, rejectedEffect } from '../effects/greetingEffects';
import { getGreeting } from '../../apis/greeting_api'

const initialState = {
  greeting: null,
  error: null,
  isLoading: false,
}

export const fetchGreetingMsg = createAsyncThunk('messages/fetchGreetingMsg', getGreeting);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,

  extraReducers: {
    [fetchGreetingMsg.pending]: pendingEffect,
    [fetchGreetingMsg.fulfilled]: fulfilledEffect,
    [fetchGreetingMsg.rejected]: rejectedEffect,
  },
});

export default greetingSlice.reducer;