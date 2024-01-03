import { ClerkProvider } from '@clerk/nextjs';
import { MugicWebSocketProvider } from '~/context/MugicWebSocketContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider>
			<MugicWebSocketProvider>{children}</MugicWebSocketProvider>
		</ClerkProvider>
	);
};
