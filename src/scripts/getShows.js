const $ = require("jquery");
const ajax = require("./ajaxCalls");
const getShows = () => {
    ajax.get()
    .then(shows => {
        shows.forEach(item => {
            $("#shows").append(`
            <section class="show" id="${item.id}">
            <p>Title: ${item.title}</p>
            <p>Seasons: ${item.seasons}</p>
            <p>Plot: ${item.plot}</p>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
            <input type="checkbox" id="box${item.id}" class="checkboxes"></input>
            </section>
            `)
            // $("#shows").on("click", `box${item.id}`, event.checkBox);
        })
    })
}
module.exports = getShows;