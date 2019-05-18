# randalthor-r6statsapi
### Example
```javascript
R6 = require("randalthor-r6statsapi");

client = new R6.client("<Auth-Key>");

async function getPlayerStats() {
    //gets usernames's stats on PC of type Generic
    const stats = await client.getStats("username", R6.constants.R6_PLATFORM_PC, R6.constants.R6_TYPE_GENERIC);
    /* YOUR CODE HERE */
}

async function getLeaderboard() {
    //Gets first page of PC leaderboard for all regions
    const leaderBoardPage = await client.getLeaderboard(R6.constants.R6_PLATFORM_PC, R6.constants.R6_REGION_ALL, 1);
    /* YOUR CODE HERE */
}
getPlayerStats();
getLeaderboard();
```

### Constants
```javascript
module.exports = {
    API: "https://api2.r6stats.com/public-api/",
    STATS: "stats/",
    LEADERBOARD: "leaderboard/",
    R6_TYPE_GENERIC: "generic",
    R6_TYPE_SEASONAL: "seasonal",
    R6_TYPE_OPERATORS: "operators",
    R6_TYPE_WEAPONS: "weapons",
    R6_TYPE_WEAPON_CATAGORIES: "weapon-catagories",
    R6_PLATFORM_PC: "pc",
    R6_PLATFORM_XBOX: "xbox",
    R6_PLATFORM_PLAYSTATION: "ps4",
    R6_REGION_ALL: "all",
    R6_REGION_NCSA: "ncsa",
    R6_REGION_EMEA: "emea",
    R6_REGION_APAC: "apac",
};

//Accessed Via
client.constants.(ex. R6_PLATFORM_XBOX)
```
### Installation

```sh
$ npm install randalthor-r6statsapi
```



