import {Environment} from './Environment';
import "reflect-metadata";
import {DataSource} from "typeorm";
import {Logger} from "../../src/Logger";
import {ColorConsole} from "../Utilities/Console";

export class AppDataSource {
    protected static inst: AppDataSource;
    protected dataSource!: DataSource;

    protected constructor() {
        this.dataSource = new DataSource({
            type: "postgres",
            host: Environment.DATABASE_HOST,
            port: Environment.DATABASE_PORT,
            username: Environment.DATABASE_USER,
            password: Environment.DATABASE_PASSWORD,
            database: Environment.DATABASE_DB,
            synchronize: Environment.DATABASE_SYNCHRONIZE,
            logging: Environment.DATABASE_LOG,
            entities: [

            ],
            migrations: [],
            subscribers: [],
        });
    }

    public static instance() {
        if (!AppDataSource.inst)
            AppDataSource.inst = new AppDataSource();

        return AppDataSource.inst;
    }

    private async init() {
        await this.dataSource.initialize().then(async (connection) => {
            ColorConsole.info("Data Source has been initialized!");
        }).catch(reason => {
            Logger.error('Initialize AppDataSource', reason);
        });
    }

    public async getDataSource() {
        if (!this.dataSource.isInitialized)
            await this.init();

        return this.dataSource;
    }
}