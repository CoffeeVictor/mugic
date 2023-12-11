'use client';

import React from 'react';
import { useMugicWebSocket } from '~/hooks/useMugicWebSocket';

export const Player: React.FC = () => {
	const mugic = useMugicWebSocket();

	return (
		<>
			<div>Player...</div>
			<button onClick={mugic.test}>Test</button>
		</>
	);
};
