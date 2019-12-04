const integration = require(require("path").dirname(require.main.filename));

integration.modules = {
    server: require("http"),
    fs: require("fs")
};