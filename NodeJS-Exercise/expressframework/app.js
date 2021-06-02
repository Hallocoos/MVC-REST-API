const express = require('express');
const service = express();

service.get("/tickets", (req, res) => {
    res.send("Reading tickets");
});

service.get("/tickets/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Reading ticket: ${id}.`);
});

service.post("/tickets", (req, res) => {
    res.send("Creating a ticket.");
});

service.put("/tickets", (req, res) => {
    res.send("Updating a ticket.");
});

service.delete("/tickets/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Deleting ticket: ${id}.`);
});

service.listen(3000, () => {
    console.log("Listening on PORT 3000.");
});

// Versioning?
// Authorization
// Model Binding?
// Model Validation
// Exception Handling
// Result Formatting

