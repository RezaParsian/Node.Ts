import {AppDataSource} from './app/Providers/DataSource';
import * as server from './app/Providers/Server';
import {schedule} from "./app/Console/Kernel";
import * as glob from 'glob';
import './app/Controllers/Web/RouterController';
import {Log} from "./core/Log";

async function bootstrap() {
    // Initialize Database in boostrap.
    await AppDataSource.instance().getDataSource();

    // Run Webserver.
    server.serve();

    // Run all schedule and listen to them.
    await schedule();
}

bootstrap().then(async () => {
    // bootstrap finished here.
    // you can write your code here for after bootstrap.
    const pattern = 'app/**/*Controller.ts';

    const jsfiles = await glob.glob(pattern, {ignore: 'node_modules/**'});

    console.log(jsfiles);
});