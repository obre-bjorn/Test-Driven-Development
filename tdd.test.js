import capitalize from  "./capitalize"
import revereString from "./reverseString"
import calculator from "./calculator"
import caesarCipher from "./caesarCipher"
import analyzeArray from "./analyzeArray"


describe('Capitalize', () => {
    it('Return first letter in capital', ()=>{
        expect(capitalize('abc')).toBe('Abc')
    })
    it("Should return null if Number", ()=>{
        expect(capitalize(5)).toBeNull()
    })
})

describe('Reverse String', ()=>{
    it('Reverse string', ()=>{
        expect(revereString("Javascript")).toBe('tpircsavaJ')
    })
})

describe('Calculator', () => {
    it('Add', ()=> {
        expect(calculator.add(5,5)).toBe(10)
    })
    it('Subtraction', ()=>{
        expect(calculator.subtract(10,5)).toBe(5)
    })
    it("Multiply", ()=>{
        expect(calculator.multiply(5,5)).toBe(25)
    })
    it("Divide", ()=>{
        expect(calculator.divide(10,5)).toBe(2)
    })
})

describe("Caesar Cipher Cryptograpghy", ()=>{

    it("Encryption One: ", ()=>{
        expect(caesarCipher("bjorn", 5)).toBe('gotws')
    })

})

describe('Analyze the array', () => {
    it('Array 1', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4,min: 1,max: 8,length: 6})
    });
});