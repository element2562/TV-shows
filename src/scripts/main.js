const $ = require("jquery");
const loadMain = require("./buildMainDom");
const event = require("./eventHandlers");
loadMain();
$("#main").on("click", "#createNew", event.postEvent);
$("#shows").on("click", ".delete", event.deleteEvent);
$("#shows").on("click", ".edit", event.editEvent);
$("#shows").keydown("#editPlotInput", event.submitEdit);
$("#shows").on("click", ".checkboxes", event.checkBox);




//Using this for edit submit event

// const title = $("#editTitleInput");
// const seasons = $("#editSeasonsInput");
// const plot = $("#editPlotInput");
// if(event.keyCode === 13){
// ajax.put(title.val(), seasons.val(), plot.val())
// .then(item => {
//     reload();
// })
// }