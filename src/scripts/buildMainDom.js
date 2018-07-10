const $ = require("jquery");
const getShows = require("getShows");
// const events = require("eventHandlers");
const loadMain = () => {
const $mainArticle = $("<article>").attr("id", "main").append(`
<h1>Showtime</h1>
<h4>Use these inputs to add a new show that you want to watch!</h4>
<label>Title: </label>
<input id="title"></input>
<label>Seasons: </label>
<input id="seasons"></input>
<label>Plot: </label>
<input id="plot"></input>
<button id="createNew">Create</button>
<article id="shows"></article>
`);
$("body").append($mainArticle);
getShows();
// events();
}
module.exports = loadMain;