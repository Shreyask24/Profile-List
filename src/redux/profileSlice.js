import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [],
};

const profileSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        addProfile: (state, action) => {
            state.list.push(action.payload);
            console.log("Adding profile:", action.payload);
        },
        editProfile: (state, action) => {
            const index = state.list.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        deleteProfile: (state, action) => {
            state.list = state.list.filter(p => p.id !== action.payload);
        },
    },
});


export const { addProfile, editProfile, deleteProfile } = profileSlice.actions;
export default profileSlice.reducer;
