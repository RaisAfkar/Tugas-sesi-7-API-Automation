const {getMethod, postMethod, putMethod, patchMethod} = require("../apiServer/apiObject");

describe(" test API restfull", function () {
    // test case 1
    it("test Function GET", async function () {
        getMethod();
    }) 
    it("test Function Post", async function () {
        postMethod();
    }) 
    it("test Function Put", async function () {
        putMethod();
    }) 
    it("test Function Patch", async function () {
        patchMethod();
    }) 
});