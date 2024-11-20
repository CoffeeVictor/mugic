import { Test, TestingModule } from '@nestjs/testing';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from './users.service';

describe('UsersService', () => {
	let usersService: UsersService;
	let prismaService: PrismaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [UsersService, PrismaService],
		}).compile();

		usersService = module.get<UsersService>(UsersService);
		prismaService = module.get<PrismaService>(PrismaService);
	});

	it('should be defined', () => {
		expect(usersService).toBeDefined();
	});

	it('should define a findByID method', () => {
		expect(usersService.findByID).toBeDefined();
	});

	it('should fetch a user with findByID method', async () => {
		const mockUser: user = {
			id: '1',
			name: 'John Doe',
		};

		jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(
			mockUser,
		);

		const result = await usersService.findByID('1');

		expect(result).toEqual(mockUser);
		expect(prismaService.user.findUnique).toHaveBeenCalledWith({
			where: {
				id: '1',
			},
		});
	});

	it('should return null if no user with the given ID is found', async () => {
		jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(null);

		const result = await usersService.findByID('1');
		expect(result).toBeNull();
		expect(prismaService.user.findUnique).toHaveBeenCalledWith({
			where: { id: '1' },
		});
	});
});
