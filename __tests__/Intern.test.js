const Intern = require('../lib/Intern');

test('Create Intern Object', () => {
    const intern = new Intern ('Marcio', 1, 'marcio@gmail.com', 'school');
    expect(intern.name).toBe('Marcio');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('marcio@gmail.com');
    expect(intern.school).toEqual('school')
})

test('Test getSchool Function', () => {
    const intern = new Intern('Marcio', 1, 'marcio@gmail.com', 'school');

    expect(intern.getSchool()).toEqual('school');
})

test('Test getRole Function', () => {
    const intern = new Intern('Marcio', 1, 'marcio@gmail.com', 'school');

    expect(intern.getRole()).toEqual('Intern');
})
