import { equal } from "assert"

import { main } from "../src/index.js"


it("Should return some coverage", function() {
    equal(main(), true)
})