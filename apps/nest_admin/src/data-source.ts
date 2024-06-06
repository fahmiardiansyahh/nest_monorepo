import { DataSourceOptions, DataSource } from "typeorm";
import { User } from "./modules/user/entities/user.entity";

export const Config: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'wr_generic_new',
    // entities: [__dirname + '/**/*.entity{.ts,.js}'],
    entities: [User],
    synchronize: true, // auto sync
    migrations: [`dist/database/migration/*.{ts,js}`], // dynamic migration folder
};
const dataSource = new DataSource(Config);
export default dataSource;