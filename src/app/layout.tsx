import { type Metadata } from 'next';
import { NavBar } from '~/components/NavBar';
import '../styles/globals.css';
import { fonts } from './fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
	title: 'Mugic',
	icons: '/icon.svg',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={fonts.rubik.variable}>
			<body>
				<Providers>
					<NavBar />
					<div className='pt-16 min-h-screen dark:bg-slate-700'>
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
