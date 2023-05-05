import {AppDataSource} from './app/Providers/DataSource';
import * as server from './app/Providers/Server';
import {schedule} from "./app/Console/Kernel";

(async function () {
    await AppDataSource.instance().getDataSource();

    server.serve();

    await schedule();
})();
