import { Sequelize } from "sequelize";
import 'dotenv/config';

const databaseUrl = process.env.DATABASE_URL;

const mysql = new Sequelize(databaseUrl, {
  dialect: "postgres",

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  logging: false,
});

export default mysql;