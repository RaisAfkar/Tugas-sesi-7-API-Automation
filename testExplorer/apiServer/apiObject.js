const request = require("supertest");
const {expect} = require("chai");
const baseUrl = require("../variableGlobal/baseUrl");
const url = `${baseUrl}`;

async function getMethod () {
    const response = await request(url).get("/object/5");
    // assertion / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function postMethod () {
    const response = await request(url).post("/object").send({
        Nama : "Muhammad Rais Afkar",
        data : {
            "Alamat" : "East-Blue",
            "Hobby" : "Masih Cari",
        }
    })
    // assertion / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function putMethod () {
    const response = await request(url).put("/object/5").send({
        Nama : "Muhammad Rais Afkar",
        data : {
            "Alamat" : "East-Blue",
            "Hobby" : "Masih Cari",
            "Email" : "bikin@pusing.com"
        }
    })
    // assertion / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
}

async function patchMethod () {
    const response = await request(url).patch("/object/3").send({
        Nama : "Muhammad Rais Afkar (ter Patch)",
    })
    // assertion / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
}
module.exports = {getMethod, postMethod, putMethod, patchMethod};