module.exports = integration = {
    server: {}, // pre defined server object used for the http server
    data: {}, // actual player data send to the text files
    temp: {} // temp player data either send from the client or saved for later use
};

require(__dirname + "/src/lib/core/modules");
require(__dirname + "/src/lib/core/server");
require(__dirname + "/src/lib/core/getPlayerData");
require(__dirname + "/src/lib/core/postPlayerData");