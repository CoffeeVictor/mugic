'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/nextjs';
import { MugicWebSocketProvider } from '~/context/MugicWebSocketContext';
import { theme } from './theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider>
			<MugicWebSocketProvider>
				<ChakraProvider theme={theme}>{children}</ChakraProvider>
			</MugicWebSocketProvider>
		</ClerkProvider>
	);
};
