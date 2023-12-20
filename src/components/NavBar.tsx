'use client';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
	Box,
	Link as ChakraLink,
	Flex,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useMediaQuery,
} from '@chakra-ui/react';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { type User } from '@clerk/nextjs/dist/types/server';
import Link from 'next/link';
import React from 'react';

const menuItems = [
	<ChakraLink as={Link} key='room' href='/rooms' marginRight='4'>
		Rooms
	</ChakraLink>,
	<ChakraLink as={Link} key='settings' href='/settings' marginRight='4'>
		Settings
	</ChakraLink>,
];

type NavBarProps = {
	user: User;
};

export const NavBar: React.FC<NavBarProps> = (props) => {
	const [isMobile] = useMediaQuery('(max-width: 768px)');
	const { user } = props;

	const handleLogOut = () => {
		SignOutButton;
	};

	return (
		<Flex
			as='nav'
			align='center'
			justify='space-between'
			px={{
				base: 3,
				md: 24,
				xl: 48,
			}}
			py='3'
			bg='teal.500'
			color='white'
			position='sticky'
			width='100%'
			zIndex='1'
		>
			<Flex align='center' mr={5}>
				<Heading as={Link} href='/' size='lg' cursor='pointer'>
					Mugic
				</Heading>
			</Flex>
			{isMobile ? (
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label='Options'
						icon={<HamburgerIcon />}
					/>
					<MenuList>
						{menuItems.map((item, index) => (
							<MenuItem key={'mobile-menu-item-' + index}>
								{item}
							</MenuItem>
						))}
					</MenuList>
				</Menu>
			) : (
				<Box display='flex' width='auto' alignItems='center'>
					{menuItems}
					<Menu>
						<UserButton />
						<MenuList>
							<MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			)}
		</Flex>
	);
};
