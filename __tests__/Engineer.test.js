const Engineer = require('../lib/Engineer');

test('Create Engineer Object', () => {
    const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com', 'abc');
    expect(engineer.name).toBe('Marcio');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('marcio@gmail.com');
    expect(engineer.github).toEqual('abc')
})

test('Test getGitHub Function', () => {
    const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com', 'abc');

    expect(engineer.getGitHub()).toEqual('abc');
})

test('Test getRole Function', () => {
    const engineer = new Engineer('Marcio', 1, 'marcio@gmail.com', 'abc');

    expect(engineer.getRole()).toEqual('Engineer');
})
