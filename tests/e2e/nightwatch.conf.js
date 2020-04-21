// This file is only necessary until the following PR is merged
//https://github.com/vuejs/vue-cli/pull/5387
const config = require('@vue/cli-plugin-e2e-nightwatch/nightwatch.config');
module.exports = {
    ...config,
    globals_path: 'globals.js',
    custom_commands_path: [
        config.custom_commands_path,
        'node_modules/nightwatch-coverage/commands'
    ]
}
