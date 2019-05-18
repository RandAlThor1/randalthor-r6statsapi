/*
Copied from existing depreciated R6STATS npm Library
*/

function ServiceResponseError(message) {
    this.name = "ServiceResponseError";
    this.message = message || "";
}

ServiceResponseError.prototype = Error.prototype;


module.exports = {
    ServiceResponseError
};