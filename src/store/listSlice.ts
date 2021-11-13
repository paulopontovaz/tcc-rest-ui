import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	fetchPokemonListService,
	editPokemonService,
	deletePokemonService,
} from "../api/rest";
import { Pokemon } from "../types/pokemon";

export const fetchPokemonList = createAsyncThunk(
	"list/fetchPokemonList",
	async (query?: string) => {
		console.log("fetchPokemonList query ", query);
		const response = await fetchPokemonListService(query);
		return (await response.data) as Pokemon[];
	}
);

export const editPokemon = createAsyncThunk(
	"list/editPokemon",
	async (pokemon: Pokemon) => {
		const response = await editPokemonService(pokemon);
		return (await response.data) as Pokemon;
	}
);

export const deletePokemon = createAsyncThunk(
	"list/deletePokemon",
	async (pokemon: Pokemon) => {
		const response = await deletePokemonService(pokemon);
		return (await response.data) as Pokemon;
	}
);

interface ListState {
	results: Pokemon[];
}

const initialState: ListState = {
	results: [],
};

export const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPokemonList.fulfilled, (state, action) => {
				state.results = action.payload;
			})
			.addCase(editPokemon.fulfilled, (state, action) => {
				state.results = state.results.map((pokemon) =>
					action.payload.id === pokemon.id ? action.payload : pokemon
				);
			})
			.addCase(deletePokemon.fulfilled, (state, action) => {
				state.results = state.results.filter(
					(pokemon) => action.payload.id !== pokemon.id
				);
			});
	},
});

export default listSlice.reducer;
