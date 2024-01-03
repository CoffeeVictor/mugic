import React from 'react';

type CreateRoomModalProps = {
	open: boolean;
};

export const CreateRoomModal: React.FC<CreateRoomModalProps> = (props) => {
	const { open } = props;

	return <dialog open={open}>This is a dialog</dialog>;
};
