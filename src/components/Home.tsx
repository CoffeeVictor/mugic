import { Flex, Heading, Text } from '@chakra-ui/react';

export const Homepage = () => {
	return (
		<Flex w={'100vw'} flexDir={'column'} p={3}>
			<Heading>Helcome to Mugic!</Heading>
			<Text>
				Enhance your online RPG experience with easy audio controls.
			</Text>
		</Flex>
	);
};
