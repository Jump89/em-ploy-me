const Engineer = require('../lib/Engineer');

test('Create Engineer Object', () => {
    const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com', 'abc');
    expect(engineer.name).toBe('Marcio');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('marcio@gmail.com');
    expect(engineer.github).toEqual('abc')
})

// test('Test getName Function', () => {
//     const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com');

//     expect(Engineer.getName()).toEqual('Marcio');
// })

// test('Test getId Function', () => {
//     const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com');

//     expect(Engineer.getId()).toEqual(1);
// })

// test('Test getEmail Function', () => {
//     const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com');

//     expect(Engineer.getEmail()).toEqual('marcio@gmail.com');
// })

// test('Test getRole Function', () => {
//     const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com');

//     expect(Engineer.getRole()).toEqual('Marcio');
// })