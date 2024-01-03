import { currentUser } from '@clerk/nextjs';
import { Homepage } from '~/components/Home';
import { Player } from '~/components/Player';

const Home = async () => {
	const user = await currentUser();

	if (!user) return <Homepage />;

	return (
		<>
			<h1 className='font-bold underline'>Hello Mundo!</h1>
			<Player />
		</>
	);
};

export default Home;
