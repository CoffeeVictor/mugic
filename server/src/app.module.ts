import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from 'src/config/env.validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			validate,
		}),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
