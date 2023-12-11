import { useContext } from 'react';
import { MugicWebSocketContext } from '~/context/MugicWebSocketContext';

export function useMugicWebSocket() {
	const mugicWebSocketContext = useContext(MugicWebSocketContext);

	return mugicWebSocketContext;
}
