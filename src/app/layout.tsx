import { ClerkProvider } from '@clerk/nextjs';

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
			<html lang='en'>
				<body>{children}</body>
			</html>
		</ClerkProvider>
	);
}
