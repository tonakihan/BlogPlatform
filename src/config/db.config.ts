export const config = {
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || undefined,
  databaseName: process.env.DB_NAME || undefined,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export const dialect = 'postgres';