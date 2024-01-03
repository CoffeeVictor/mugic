import { SignIn } from '@clerk/nextjs';

export const Homepage = () => {
	return (
		<div className='w-100 min-h-dvh flex flex-col md:px-80 dark:bg-slate-900 dark:text-slate-200'>
			<div className='flex flex-col items-center'>
				<h1 className='text-center'>Welcome to Mugic!</h1>
				<p className='text-center'>
					Enhance your online RPG experience with easy audio controls.
				</p>
			</div>
			<div className='flex flex-col items-center'>
				<SignIn />
			</div>
		</div>
	);
};
