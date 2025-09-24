import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  theme: 'light' | 'dark'
  language: 'zh' | 'en'
  isMenuOpen: boolean
}

const initialState: AppState = {
  theme: 'light',
  language: 'zh',
  isMenuOpen: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    setLanguage: (state, action: PayloadAction<'zh' | 'en'>) => {
      state.language = action.payload
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu: (state) => {
      state.isMenuOpen = false
    },
  },
})

export const { setTheme, setLanguage, toggleMenu, closeMenu } = appSlice.actions

export default appSlice.reducer