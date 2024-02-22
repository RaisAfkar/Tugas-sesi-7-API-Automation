const request = require("supertest");
const {expect} = require("chai");
const baseUrl = require("../variableGlobal/baseUrl");
const url = `${baseUrl}`;

describe(" test API restfull", function () {
    // test case 1
    it("test GET", async function () {
        const response = await request(url).get("/object/5");
    // assertion / verifikasi
        expect(response.status).to.equal(200);
        console.log(response.body);
    }) 

});