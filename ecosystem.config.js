module.exports = {
    apps:[
        {
            name: "Crawler",
            script: "npx ts-node main.ts",
            watch:'main.ts',
            exp_backoff_restart_delay: 5000,
            restart_delay: 5000,
        }
    ]
};
