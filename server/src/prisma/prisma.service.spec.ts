import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('PrismaService', () => {
	let service: PrismaService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [PrismaService],
		}).compile();

		service = module.get<PrismaService>(PrismaService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should connect to the database on module initialization', async () => {
		const connectSpy = jest.spyOn(service, '$connect');
		await service.onModuleInit();
		expect(connectSpy).toHaveBeenCalled();
	});

	it('should disconnect from the database on module destruction', async () => {
		const disconnectSpy = jest.spyOn(service, '$disconnect');
		await service.onModuleDestroy();
		expect(disconnectSpy).toHaveBeenCalled();
	});

	it('should throw an error if the database connection fails', async () => {
		jest.spyOn(service, '$connect').mockRejectedValue(
			new Error('Connection failed'),
		);

		await expect(service.onModuleInit()).rejects.toThrow(
			'Connection failed',
		);
	});
});
