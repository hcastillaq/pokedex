import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../interfaces";

export interface InitialState {
	pokemon: undefined | Pokemon;
	loading: boolean;
	notFound: boolean;
}

const initialState: InitialState = {
	pokemon: undefined,
	loading: true,
	notFound: true,
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setPokemon: (state, action) => {
			state.pokemon = action.payload;
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
		},
		setNotFound: (state, action) => {
			state.notFound = action.payload;
		},
	},
});

export const { setPokemon, setLoading, setNotFound } = appSlice.actions;

export const store = configureStore({
	reducer: {
		app: appSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
