import "reflect-metadata";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tin18082002",
    database: "db_dev",
    synchronize: true,
    logging: true,
    entities: ["./src/app/Entities/**/*.ts"],
    migrations: ["./src/database/migrations/**/*.ts"],
    subscribers: ["./src/database/subcribers/**/*.ts"],
});

