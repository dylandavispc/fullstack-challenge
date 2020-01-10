const db = require("../models");

module.exports = function(app) {

    // Form POST
    app.post("/api/form", function(req, res) {
        console.log(req.body);
        db.Form.create(req.body).then(function(dbForm) {
            res.json(dbForm);
        });
    });

    // Form GET
    app.get("/api/form", function(req, res) {
        db.Form.findAll({})
        .then(function(dbForm) {
            res.json(dbForm);
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
        });
    });

    // Form DELETE
    app.delete("/api/form/:id", function(req, res) {
        console.log("delete test")
        db.Form.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbForm) {
            res.json(dbForm);
        });
    });
}