import { Card, CardHeader, Heading } from '@chakra-ui/react';
import React, { type PropsWithChildren } from 'react';

type RoomCardProps = PropsWithChildren & {
	name: string;
};

export const RoomCard: React.FC<RoomCardProps> = (props) => {
	const { name } = props;

	return (
		<Card>
			<CardHeader>{name}</CardHeader>
		</Card>
	);
};

export const CreateRoomCard: React.FC = () => {
	return (
		<Card maxW={'md'}>
			<CardHeader>
				<Heading>Create a new room</Heading>
			</CardHeader>
		</Card>
	);
};
