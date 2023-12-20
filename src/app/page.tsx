import { auth } from '@clerk/nextjs';
import { Homepage } from '~/components/Home';
import { NavBar } from '~/components/NavBar';
import { Player } from '~/components/Player';

const Home = async () => {
	const { user } = auth();

	if (!user) return <Homepage />;

	return (
		<>
			<NavBar user={user} />
			<h1>Hello Mundo!</h1>
			<Player />
		</>
	);
};

export default Home;
