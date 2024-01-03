import { type PropsWithChildren } from 'react';

const RoomsLayout: React.FC<PropsWithChildren> = (props) => {
	const { children } = props;

	return (
		<>
			<div className=''>{children}</div>
		</>
	);
};

export default RoomsLayout;
