import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import PokemonDetails from "./PokemonDetails";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const App: FC = () => (
	<Flex
		className="App"
		h="100%"
		p={4}
		flexDirection="column"
		justify="space-between"
	>
		<Heading mb={4}>PokéSearch</Heading>
		<Outlet />
	</Flex>
);

export default App;
