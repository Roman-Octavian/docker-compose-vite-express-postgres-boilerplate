import * as dotenv from 'dotenv';

export function getConnectionString(target: 'docker' | 'local'): string {
  dotenv.config({
    path: target === 'docker' ? '.env.template' : '.env.local.template',
  });

  const REQUIRED_ENVS: string[] = [
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DB',
    'POSTGRES_HOST',
    'POSTRGRES_PORT',
  ];

  REQUIRED_ENVS.forEach((e) => {
    if (process.env[e] == null) {
      throw new Error(`${e} environment variable missing`);
    }
  });

  const { POSTGRES_USER, POSTGRES_DB, POSTRGRES_PORT, POSTGRES_HOST, POSTGRES_PASSWORD } =
    process.env;

  return `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTRGRES_PORT}/${POSTGRES_DB}`;
}
