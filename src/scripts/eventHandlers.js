const $ = require("jquery");
const ajax = require("./ajaxCalls");
const reload = require("./reloadShows");
//Create, edit, and delete buttons.

const events = Object.create(
  {},
  {
    postEvent: {
      value: () => {
        const titleInput = $("#title");
        const seasonInput = $("#seasons");
        const plotInput = $("#plot");
        ajax
          .post(titleInput.val(), seasonInput.val(), plotInput.val())
          .then(item => {
            reload();
          });
      }
    },
    deleteEvent: {
      value: () => {
        ajax.delete(event.target.parentNode.id).then(item => {
          reload();
        });
      }
    },
    editEvent: {
      value: () => {
        $(`#${event.target.parentNode.id}`).append(`
            <label>Title:</label>
            <input id="editTitleInput"></input>
            <br>
            <label>Seasons:</label>
            <input id="editSeasonsInput"></input>
            <br>
            <label>Plot:</label>
            <input id="editPlotInput" showId=${
              event.target.parentNode.id
            }></input>
            <button id="hideMe"></button>
            `);
        $("#hideMe").hide();
      }
    },
    submitEdit: {
      value: () => {
        // console.log("is this working");

        const title = $("#editTitleInput");
        const seasons = $("#editSeasonsInput");
        const plot = $("#editPlotInput");
        if (event.keyCode === 13) {
          ajax
            .put(
              event.target.parentNode.id,
              title.val(),
              seasons.val(),
              plot.val()
            )
            .then(item => {
              reload();
            });
        }
      }
    },
    checkBox: {
      value: () => {
        const checkbox = $(`#box${event.target.parentNode.id}`);
        // console.log(checkbox);
        console.log(this);
        if ($(event.target).is(":checked")) {
          let $title = $(`#title${event.target.parentNode.id}`);
          let $seasons = $(`#seasons${event.target.parentNode.id}`);
          let $plot = $(`#plot${event.target.parentNode.id}`);
        //   console.log(event.target.parentNode.id);

          ajax.checked(event.target.parentNode.id, $title.text(), $seasons.text(), $plot.text())
            .then(item => {
              reload();
            });
        }
      }
    }
  }
);
module.exports = events;
