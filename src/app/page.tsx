import { currentUser } from '@clerk/nextjs';

const Home = async () => {
	const user = await currentUser();

	return (
		<>
			<h1>Hello Mundo!</h1>
		</>
	);
};

export default Home;
