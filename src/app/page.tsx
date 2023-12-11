import { currentUser } from '@clerk/nextjs';
import { Player } from '~/components/Player';

const Home = async () => {
	const user = await currentUser();

	return (
		<>
			<h1>Hello Mundo!</h1>
			<Player />
		</>
	);
};

export default Home;
