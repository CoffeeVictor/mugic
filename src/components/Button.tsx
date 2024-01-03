import React, { type PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren & {
	onClick?: () => Promise<void>;
};

export const Button: React.FC<ButtonProps> = (props) => {
	const { children, onClick } = props;

	return (
		<button
			className='font-medium dark:text-slate-50 dark:bg-slate-400 hover:dark:bg-slate-300 transition-all py-1 px-3 rounded'
			onClick={onClick}
		>
			{children}
		</button>
	);
};
