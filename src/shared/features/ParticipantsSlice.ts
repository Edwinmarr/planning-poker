import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Participant {
  id: string;
  name: string;
  type: 'Player' | 'Spectator';
}

interface ParticipantsState {
  participants: Participant[];
}

const initialState: ParticipantsState = {
  participants: [],
};

const participantsSlice = createSlice({
  name: 'participants',
  initialState,
  reducers: {
    addParticipant: (state, action: PayloadAction<Participant>) => {
      state.participants.push(action.payload);
    },
    removeParticipant: (state, action: PayloadAction<string>) => {
      state.participants = state.participants.filter(
        (participant) => participant.id !== action.payload
      );
    },
  },
});

export const { addParticipant, removeParticipant } = participantsSlice.actions;

export default participantsSlice.reducer;
