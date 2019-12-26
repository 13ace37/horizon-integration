/**
 * Workaround to create an executable file of the application
 *
 * Only used for application build - use index.js for sourcecode usage!
 */

// Not the best workaround for the execDir but its working :)

let fullDir = process.argv[0].split("\\");
fullDir.pop();
__dirname = fullDir.join("\\");

// Not the best workaround for the execDir but its working :)

module.exports = integration = {
    server: {}, // pre defined server object used for the http server
    data: {}, // actual player data send to the text files
    temp: {}, // temp player data either send from the client or saved for later use
    modules: { // application's local nodejs modules
        server: require("http"),
        fs: require("fs")
    }
};

integration.server.handle = function (request, result) {

    if (request.method !== "POST") { // ignore GET requests

        result.writeHead(500, {"Content-Type": "text/html"}); // return server error code
        result.end(""); // send empty response

    } else {

        request.on("data", function (data){
            integration.server.addData(data);
        });

        request.on("end", function () {
            integration.server.getPlayerData(result);
        });

    }

};

integration.server.addData = function (data) {
    integration.temp.data = data;
};

integration.server.getPlayerData = function (result) {
    try {
        integration.data.playerData = JSON.parse(integration.temp.data);
    } catch (error) {console.error(error)}
    result.end("");

    let map = "N/A";
    let mapRank = "N/A";
    let serverRank = "N/A";
    let finishedMaps = "N/A";

    if (integration.data.playerData.player.match_stats) {
        if (integration.data.playerData.player.match_stats.deaths && integration.data.playerData.player.match_stats.deaths > 0) mapRank = integration.data.playerData.player.match_stats.deaths;
        if (integration.data.playerData.player.match_stats.kills && integration.data.playerData.player.match_stats.kills > 0) finishedMaps = integration.data.playerData.player.match_stats.kills;
        if (integration.data.playerData.player.match_stats.score && integration.data.playerData.player.match_stats.score < 0 && integration.data.playerData.player.match_stats.score !== -99999) serverRank = String(integration.data.playerData.player.match_stats.score).slice(1);
    }

    if (integration.data.playerData.map) {
        map = integration.data.playerData.map.name.split('/')[2] || integration.data.playerData.map.name || "N/A"
    }

    integration.data.finalPlayerData = {
        map,
        mapRank,
        serverRank,
        finishedMaps,
        playerName: integration.data.playerData.player.name,
        playerRank: integration.data.playerData.player.clan || "N/A",
        playerNameFull: (integration.data.playerData.player.clan || "N/A") + " " + integration.data.playerData.player.name
    };
    integration.server.postPlayerData(integration.data.finalPlayerData);
};


integration.server.http = integration.modules.server.createServer(function (request, result){
    integration.server.handle(request, result);
});

integration.server.http.listen(23251, "127.0.0.1");

console.log("Server running on port 23251");

integration.server.postPlayerData = function (data) {

    /**
     * Format:
     *
     * Map: surf_map_name
     * Map-Rank: mapRank[player]
     * Server-Rank: #playerRank[player] - playerRankName[player]
     */

    // todo: Remove hardcoded output - Add a format config instead

    if(!integration.modules.fs.existsSync(require("path").join(__dirname + "/output"))) {
        integration.modules.fs.mkdirSync(require("path").join(__dirname + "/output"));
    }

    integration.modules.fs.writeFile(require("path").join(__dirname + "/output/map.txt"), String(data.map), "utf8", function (error) {
        if (error) throw error;
    });
    integration.modules.fs.writeFile(require("path").join(__dirname + "/output/mapRank.txt"), String(data.mapRank), "utf8", function (error) {
        if (error) throw error;
    });
    integration.modules.fs.writeFile(require("path").join(__dirname + "/output/playerRank.txt"), String("#" + data.serverRank + " - " + data.playerRank), "utf8", function (error) {
        if (error) throw error;
    });

};