
const add = (a,b) => a + b;
const generateGreeting = name => `Hello ${name}`;

test("should ass two numbers", () => {
    const result = add(3,4);
    // id(result !==7){
    //     throw new Error(`You added 4 & 4 The resul was ${result}. Expect 7`)
    // }
    expect(result).toBe(7);
});

test("jemenko?", () => {
    const result = generateGreeting('Marek')
    expect(result).toBe("Hello Marek")
})