const config = {};

config.development = {
    port: process.env.PORT || 3000,
};

config.production = {
    port: process.env.PORT || 3000,
};

module.exports = config;