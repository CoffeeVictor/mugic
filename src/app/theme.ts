import { extendTheme } from '@chakra-ui/react';

const config = {
	fonts: {
		heading: 'var(--font-rubik)',
		body: 'var(--font-rubik)',
	},
};

export const theme = extendTheme(config);
