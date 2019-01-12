module.exports = (app) => {
    // Displays all table groups.
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });

    // Displays the waiting list.
    app.get("/api/waitList", function(req, res) {
        return res.json(waitList);
    });
}