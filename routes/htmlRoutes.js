// Dependencies
var path = require("path");

module.exports = (app) => {
    // Shows table and waiting list.
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "tables.html"));
    });

    // Shows reservation form.
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "reserve.html"));
    });

    // Defaults to home page.
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../public", "home.html"));
    });
}