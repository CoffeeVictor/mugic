import React, { type PropsWithChildren } from 'react';

type RoomCardProps = PropsWithChildren & {
	name: string;
};

export const RoomCard: React.FC<RoomCardProps> = (props) => {
	const { name } = props;

	return (
		<div className='card glass w-72'>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<div className='card-actions justify-center'>
					<button className='btn btn-primary'>Join</button>
				</div>
			</div>
		</div>
	);
};

export const CreateRoomCard: React.FC = () => {
	return (
		<div className='card glass w-72'>
			<div className='card-body'>
				<h2 className='card-title'>Create a new Room?</h2>
				<div className='card-actions justify-center'>
					<button className='btn btn-primary'>Create</button>
				</div>
			</div>
		</div>
	);
};
