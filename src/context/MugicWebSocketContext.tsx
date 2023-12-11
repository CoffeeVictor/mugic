'use client';

import React, { createContext, type PropsWithChildren } from 'react';

export type MugicWebSocketContextType = {
	test: () => void;
};

export const MugicWebSocketContext = createContext(
	{} as MugicWebSocketContextType
);

export const MugicWebSocketProvider: React.FC<PropsWithChildren> = (props) => {
	const { children } = props;

	const test = () => {
		console.log('Hello from context');
	};

	return (
		<MugicWebSocketContext.Provider
			value={{
				test,
			}}
		>
			{children}
		</MugicWebSocketContext.Provider>
	);
};
