import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: localStorage.getItem('darkMode') === 'true',
  },
  reducers: {
    toggleDarkMode: (state) => {
      const newMode = !state.darkMode;
      localStorage.setItem('darkMode', String(newMode));
      state.darkMode = newMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
