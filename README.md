# horizon-obs-integration
 
A player data integration for [HorizonServers](https://www.horizonservers.net/).

---

### Requirements

This application only uses default/pre-installed node modules.

- NodeJS 12.*+

### Installation

1. download [latest release](https://github.com/13ace37/horizon-obs-integration/releases) -  Currently work in progress use sourcecode instead.
2. copy downloaded/cloned `gamestate_integration_horizon.cfg` into your `csgo\cfg\` folder.
    - if your game was running during this process, please restart it.
3. launch downloaded `horizon-integration.exe` and join a horizon server - launch the sourcecode using `node index.js`.
    - this application may work on different servers, but it will provide invalid player data.

### Usage

The application creates an `output` folder in the executable directory. This folder contains 3 files:
    
    - map.txt -> contains mapname (surf_mesa_fix)
    - mapRank.txt -> contains players maprank (24 || N/A if the player hasn't finished the map yet)
    - playerRank.txt -> contains players server rank (#1337 - Advanced ✪ || both N/A if player isn't ranked or no rank is availible)
    
To add the data into your OBS or other recording/streaming software, simply add a text and let it read from these files.