
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');
const should = chai.should();
const Api = require("../routes/api-routes")

chai.use(chaiHttp);

describe( "API Tests", () => {
    it("get all participants", done => {
        chai
            .request(app)
            .get("/api/form")
            .end(( err, res ) => {
                res.should.have.status(200);
            done();
            })
    });
    it("should post a participant", done => {
        let participant = {
            firstName : "testMan",
            lastName : "Junior",
            part : 13
        }
        chai
            .request(app)
            .post("/api/form")
            .send(participant)
            .end(( err, res ) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
            done();
            })
    });
});