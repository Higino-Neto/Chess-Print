import { Sequelize } from "sequelize";
import 'dotenv/config';
import pg from "pg";

const databaseUrl = process.env.DATABASE_URL;

const mysql = new Sequelize(databaseUrl, {
  dialect: "postgres",
  dialectModule: pg,

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  },
  logging: false,
});

export default mysql;
