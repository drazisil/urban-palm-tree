const assert = require("assert")

const { main } = require("../src/index.js")


it("Should return some coverage", function() {
    assert.equal(main(), true)
})