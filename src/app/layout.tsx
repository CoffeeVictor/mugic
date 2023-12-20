import { fonts } from './fonts';
import { Providers } from './providers';

export const metadata = {
	title: 'Next.js 13 with Clerk',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={fonts.rubik.variable}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
