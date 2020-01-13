
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
const Api = require("../routes/api-routes")

chai.use(chaiHttp);

describe( "API", () => {
    it("Gets All Participants", done => {
        chai
            .request(server)
            .get("/api/form")
            .end(( err, res ) => {
                res.should.have.status(200);
            done();
            })
    });
});