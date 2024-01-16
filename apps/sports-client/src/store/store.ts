import { combineReducers, configureStore } from '@reduxjs/toolkit';
import clubReducer from './reducer/clubsSlice'
import clientReducer from './reducer/clientsSlice'

export const rootReducer = combineReducers(
	{club : clubReducer, client: clientReducer});

export const setupStore = () => configureStore({ reducer : rootReducer})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
