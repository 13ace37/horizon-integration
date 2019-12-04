const integration = require(require("path").dirname(require.main.filename));

integration.server.postPlayerData = function (data) {

    /**
     * Format:
     *
     * Map: surf_map_name
     * Map-Rank: mapRank[player]
     * Server-Rank: #playerRank[player] - playerRankName[player]
     */

    // todo: Remove hardcoded output - Add a format config instead

    integration.modules.fs.writeFile(require("path").join(require.main.path + "/output/map.txt"), String(data.map), "utf8", function (error) {
       if (error) throw error;
    });
    integration.modules.fs.writeFile(require("path").join(require.main.path + "/output/mapRank.txt"), String(data.mapRank), "utf8", function (error) {
       if (error) throw error;
    });
    integration.modules.fs.writeFile(require("path").join(require.main.path + "/output/playerRank.txt"), String("#" + data.serverRank + " - " + data.playerRank), "utf8", function (error) {
       if (error) throw error;
    });

};