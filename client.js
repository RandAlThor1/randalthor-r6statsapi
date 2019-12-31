const RequestPromise = require("request-promise");
const errors = require("./errors");
const constants = require("./constants");

class client {
  /**
   *
   * @param {String} AuthKey      Auth key to access the R6Stats Public API
   */
  constructor(AuthKey) {
    this.AuthKey = AuthKey;
  }
  /**
   * @param {String} username      desired User to get stats for
   * @param {String} platform      desired platform to get stats for
   * @param {String} type          desired type of stats to get
   */
  getStats(username, platform, type) {
    const path = `${constants.API}${constants.STATS}${username}/${platform}/${type}`;
    return this.request(path)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        throw new errors.ServiceResponseError(err);
      });
  }
  /**
   * @param {String} platform   desired platform to get leaderboard for
   * @param {String} region     desired region to get leaderboard for
   * @param {Number} page       desired page of leader to get
   */
  getLeaderboard(platform, region, page) {
    if (page === null) page = 1;
    if (region === null) region = constants.R6_REGION_ALL;
    const path = `${constants.API}${constants.LEADERBOARD}${platform}/${region}?page=${page}`;
    return this.request(path)
      .then(res => {
        return Promise.resolve(res);
      })
      .catch(err => {
        throw new errors.ServiceResponseError(err);
      });
  }
  /**
   * @param {String} path manual path to send a API request too
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
