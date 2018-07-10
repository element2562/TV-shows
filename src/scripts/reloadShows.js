const $ = require("jquery");
const rebuild = require("./getShows");
const reloadShows = () => {
    $("#shows").empty();
    rebuild();
}
module.exports = reloadShows;