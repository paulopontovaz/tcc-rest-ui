import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectSelectedPokemon } from "../store/selectors";

const PokemonDetails: FC = () => {
	const dispatch = useAppDispatch();
	const selectedPokemon = useAppSelector(selectSelectedPokemon);

	return <Flex>{selectedPokemon?.name}</Flex>;
};

export default PokemonDetails;
