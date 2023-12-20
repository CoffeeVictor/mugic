'use client';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const RoomsLayout: React.FC<PropsWithChildren> = (props) => {
	const { children } = props;

	const bgColor = useColorModeValue('teal.50', 'teal.800');

	return <Box bg={bgColor}>{children}</Box>;
};

export default RoomsLayout;
