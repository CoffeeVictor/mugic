import { CreateRoomCard, RoomCard } from '~/components/RoomCard';

type RoomType = {
	name: string;
};

const rooms: RoomType[] = [
	{
		name: 'Test 1',
	},
	{
		name: 'Test 1',
	},
	{
		name: 'Test 1',
	},
	{
		name: 'Test 1',
	},
	{
		name: 'Test 1',
	},
	{
		name: 'Test 1',
	},
	{
		name: 'Test 1',
	},
];

const Rooms = async () => {
	return (
		<>
			<div className=''>
				<div className='flex flex-wrap gap-4'>
					<CreateRoomCard />
					{rooms.map((room, index) => (
						<RoomCard key={'room-list' + index} name={room.name} />
					))}
				</div>
			</div>
		</>
	);
};

export default Rooms;
