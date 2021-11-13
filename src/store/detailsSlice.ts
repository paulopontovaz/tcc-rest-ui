import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonService } from "../api/rest";
import { Pokemon } from "../types/pokemon";

export const fetchPokemon = createAsyncThunk(
	"list/fetchPokemon",
	async (pokemon: Pokemon) => {
		const response = await fetchPokemonService(pokemon);
		return (await response.data) as Pokemon;
	}
);

interface DetailsState {
	selected: Pokemon;
}

const initialState: DetailsState = {
	selected: {} as Pokemon,
};

export const detailsSlice = createSlice({
	name: "details",
	initialState,
	reducers: {
		setSelectedPokemons: (state, action: PayloadAction<Pokemon>) => {
			state.selected = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPokemon.fulfilled, (state, action) => {
			state.selected = action.payload;
		});
	},
});

export const { setSelectedPokemons } = detailsSlice.actions;

export default detailsSlice.reducer;
