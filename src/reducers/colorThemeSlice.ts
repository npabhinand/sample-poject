import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { light, dark } from '../common/colors';

export type ColorThemeName = 'light' | 'dark';

const initialState: ColorThemeState = {
    theme: dark,
};

const colorThemeSlice = createSlice({
    name: 'colorTheme',
    initialState,
    reducers: {
        updateColorTheme: (state, action: PayloadAction<ColorThemeName>) => {
            state.theme = action.payload;
        },
    },
});

// selectors
export const selectColorTheme = (state: RootState) => state.colorTheme.theme;

export const { updateColorTheme } = colorThemeSlice.actions;
export default colorThemeSlice.reducer;

export const themeColors = {
    light,
    dark,
};