const $ = require("jquery");

const ajaxCalls = Object.create(
  {},
  {
    get: {
      value: () => {
        return $.ajax("http://localhost:3000/Shows?watched=false");
      }
    },
    post: {
      value: (title, seasons, plot) => {
        return $.ajax({
          url: "http://localhost:3000/Shows",
          method: "POST",
          data: {
            title: title,
            seasons: seasons,
            plot: plot,
            watched: false
          }
        });
      }
    },
    put: {
      value: (id, title, seasons, plot) => {
        return $.ajax({
          url: `http://localhost:3000/Shows/${id}`,
          method: "PUT",
          data: {
            title: title,
            seasons: seasons,
            plot: plot,
            watched: false
          }
        });
      }
    },
    delete: {
      value: id => {
        return $.ajax({
          url: `http://localhost:3000/Shows/${id}`,
          method: "DELETE"
        });
      }
    },
    checked: {
      value: (id, title, seasons, plot) => {
        return $.ajax({
          url: `http://localhost:3000/Shows/${id}`,
          method: "PUT",
          data: {
            title: title,
            seasons: seasons,
            plot: plot,
            watched: true
          }
        });
      }
    }
  }
);
module.exports = ajaxCalls;
