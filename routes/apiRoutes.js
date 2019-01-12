module.exports = (app, tables, waitList) => {
    // Displays all table groups.
    app.get("/api/tables", function(req, res) {
        return res.json(tables);
    });

    // Displays the waiting list.
    app.get("/api/waitList", function(req, res) {
        return res.json(waitList);
    });

    // Creates a new table group.
    app.post("/api/tables", function(req, res) {
        var newTable = req.body;

        newTable.customerID = /*newTable.customerName.replace(/\s+/g, "").toLowerCase() + */newTable.customerEmail.substring(0, newTable.customerEmail.indexOf("@"));

        console.log(newTable);
    
        tables.push(newTable);

        res.json(newTable);

        if(tables.length > 5) {
            waitList.push(newTable);
            return "You are on the wait list.";
        } else {
            return "You will be seated shortly.";
        }
    });
}