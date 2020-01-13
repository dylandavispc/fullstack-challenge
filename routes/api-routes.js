const db = require("../models");

module.exports = function(app) {

    // Form POST
    app.post("/api/form", function(req, res) {
        console.log(req.body);
        db.Form.create(req.body)
        .then(function(dbForm) {
            res.json(dbForm);
        })
        .catch(function(err) {
            res.status(400).json({ message: "issues trying to connect to database", err });
        });
    });

    // Form GET
    app.get("/api/form", function(req, res) {
        db.Form.findAll({})
        .then(function(dbForm) {
            res.json(dbForm);
        })
        .catch(function(err) {
            res.status(400).json({ message: "issues trying to connect to database", err });
        });
    });

    // Form PUT
    app.put("/api/form", function(req, res) {
        db.Form.update(req.body,
        {
            where: {
              id: req.body.id
            }
        })
        .then(function(dbForm) {
            res.json(dbForm);
        })
        .catch(function(err) {
            res.status(400).json({ message: "issues trying to connect to database", err });
        });
    });

    // Form DELETE
    app.delete("/api/form/:id", function(req, res) {
        console.log(req.params.id)
        db.Form.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbForm) {
            res.json(dbForm);
        })
        .catch(function(err) {
            res.status(400).json({ message: "issues trying to connect to database", err });
        });
    });
}