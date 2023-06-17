module.exports = {
    apps:[
        {
            name: "Crawler",
            script: "npx ts-node main.ts",
            watch:true,
            ignore_watch : ["node_modules", ".db",".idea",'storage'],
            exp_backoff_restart_delay: 5000,
            restart_delay: 5000,
        }
    ]
};
