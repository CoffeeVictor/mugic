'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/nextjs';
import { MugicWebSocketProvider } from '~/context/MugicWebSocketContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider>
			<MugicWebSocketProvider>
				<ChakraProvider>{children}</ChakraProvider>
			</MugicWebSocketProvider>
		</ClerkProvider>
	);
};
