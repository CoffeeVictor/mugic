import Link from 'next/link';
import React, { type PropsWithChildren } from 'react';

type LinkButtonProps = PropsWithChildren & {
	href: string;
};

export const LinkButton: React.FC<LinkButtonProps> = (props) => {
	const { children, href } = props;

	return (
		<Link
			className='font-medium dark:text-slate-50 dark:bg-slate-400 hover:dark:bg-slate-300 transition-all py-1 px-3 rounded'
			href={href}
		>
			{children}
		</Link>
	);
};
