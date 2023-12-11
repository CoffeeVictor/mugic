import { ClerkProvider } from '@clerk/nextjs';
import { MugicWebSocketProvider } from '~/context/MugicWebSocketContext';

export const metadata = {
	title: 'Next.js 13 with Clerk',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<MugicWebSocketProvider>
				<html lang='en'>
					<body>{children}</body>
				</html>
			</MugicWebSocketProvider>
		</ClerkProvider>
	);
}
