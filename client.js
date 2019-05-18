const RequestPromise = require("request-promise");
const errors = require("./errors");
const constants = require("./constants");

class client {
    /* 
    @AuthKey R6STATS API AUTH KEY
    */
    constructor(AuthKey) {
        this.AuthKey = AuthKey;
    }

    /* 
    @username is players username
    @platform is a platform constant
    @type is a type constant
    */
    getStats(username, platform, type) {
        const path = `${constants.API}${constants.STATS}${username}/${platform}/${type}`;
        return this.request(path).then(res => {
            return Promise.resolve(res);
        }).catch(err => {
            throw new errors.ServiceResponseError(err);
        });
    }
    /* 
    @page Pages are in intervals of 100 players, is optional
    @platform is a platform constant
    @region is a region constant, optional
    */
    getLeaderboard(platform, region, page) {
        if (page === null) page = 1;
        if (region === null) region = constants.R6_REGION_ALL;
        const path = `${constants.API}${constants.LEADERBOARD}${platform}/${region}?page=${page}`;
        return this.request(path).then(res => {
            return Promise.resolve(res);
        }).catch(err => {
            throw new errors.ServiceResponseError(err);
        });
    }

    /* 
    * NOT INTENDED TO BE USED OUTSIDE OF LIB ITSELF
    */
    request(path) {
        const defaults = {
            method: "GET",
            json: true,
            url: path,
            headers: {
                Authorization: this.AuthKey
            }
        };
        const options = Object.assign({}, defaults);
        return RequestPromise(options);
    }
}



module.exports.client = client;
module.exports.errors = errors;
module.exports.constants = constants;