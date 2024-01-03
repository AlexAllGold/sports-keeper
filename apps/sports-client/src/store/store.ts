import { combineReducers, configureStore } from '@reduxjs/toolkit';
import clubReducer from './reducer/clubsSlice'

export const rootReducer = combineReducers(
	{clubReducer});

export const setupStore = () => configureStore({ reducer : rootReducer})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
