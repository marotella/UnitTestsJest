let functions = require("./functions");

describe("tests for return two", () =>{
    test("check for 2 value returned", () =>{
        const result = functions.returnTwo()
        expect(result).toBe(2)
    })
})

describe("test for greeting returning name", () => {
    test("test for returning Jack", ()=>{
        const result = functions.greeting("Jack")
        expect(result).toBe("Hello Jack.")
    }),
    test("test for returning Jill", ()=>{
        const result = functions.greeting("Jill")
        expect(result).toBe("Hello Jill.")
    })
})

describe("test for add", () => {
    test("check for 1,2", () => {
        const result = functions.add(1,2);
        expect(result).toBe(3)
    }),
    test("check for 5,9", () => {
        const result = functions.add(5,9);
        expect(result).toBe(14)
    })
})