<p align="center">
    <img src=".images/logo-transparent.png" height="128" />
    <h1 align="center">-# Horizon Integration #-</h1>
    <strong>
         <p align="center">
              A player data integration for <a href="https://www.horizonservers.net/">HorizonServers</a>.
         </p>
    </strong><br><br>
<br>
</p>

---
 
This application wasn't created in any cooperation with the [HorizonServers](https://www.horizonservers.net/) Staff! 
If you have any questions, please contact me at discord [Ace#5393] or [steam](https://www.steamcommunity.com/id/main_tryhard)!

### Requirements

This application only uses default/pre-installed node modules.

- NodeJS 12.*+

### Installation

1. download [latest release](https://github.com/13ace37/horizon-integration/releases)
2. copy downloaded/cloned `gamestate_integration_horizon.cfg` into your `csgo\cfg\` folder.
    - if your game was running during this process, please restart it.
3. launch downloaded `horizon-integration` executable for your os and join a horizon server
    - this application may work on different servers, but it will provide invalid player data.

### Usage

The application creates an `output` folder in the executable directory. This folder contains 3 files:
    
   - map.txt:
   ```
      current mapname e.g. surf_mesa_fix
        can be N/A if the player ins't connected to any server
   ```
    
   - mapRank.txt:
   ```
         current normal style maprank e.g. 24
            can be N/A if the player hasn't finished the map yet
            also the maprank is limited at 1999 in that case the rank will stay at 1999+
   ```
    
   - playerRank.txt:
   ```
         current players numeric and text server rank e.g. #1337 - Advanced ✪ 
            both can be N/A if either the server isn't providing the rank or the player isn't ranked yet
   ```
   
