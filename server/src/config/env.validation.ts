import { ConfigModuleOptions } from '@nestjs/config';
import { z } from 'zod';

const environmentSchema = z.object({
	DATABASE_URL: z.string(),
});

export const validate: ConfigModuleOptions['validate'] = (config) => {
	const { success, data, error } = environmentSchema.safeParse(config);

	if (!success) throw new Error(error.toString());

	return data;
};
