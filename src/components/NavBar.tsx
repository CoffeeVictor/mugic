import Image from 'next/image';
import React from 'react';
import { LinkButton } from './LinkButton';

export const NavBar: React.FC = async () => {
	return (
		<nav className='flex dark:bg-slate-700 dark:text-slate-200 items-center justify-between h-16 z-10 fixed w-full shadow-sm'>
			<Image
				src='/assets/logo.svg'
				width={160}
				height={60}
				className='object-contain'
				alt='Mugic Logo'
			/>
			<div className='flex gap-4'>
				<LinkButton href='/rooms'>Rooms</LinkButton>
			</div>
		</nav>
	);
};
