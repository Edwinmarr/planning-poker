import { configureStore } from '@reduxjs/toolkit';
import participantsReducer from './features/ParticipantsSlice';

const store = configureStore({
  reducer: {
    participants: participantsReducer,
  },
  devTools: process.env.NODE_ENV !== 'dev',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;