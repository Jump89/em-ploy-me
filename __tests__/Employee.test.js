const Employee = require('../lib/Employee');

test('Create Employee Object', () => {
    const employee = new Employee('Marcio', 1, 'marcio@gmail.com');
    expect(employee.name).toBe('Marcio');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('marcio@gmail.com');
})

test('Test getName Function', () => {
    const employee = new Employee('Marcio', 1, 'marcio@gmail.com');

    expect(employee.getName()).toEqual('Marcio');
})

test('Test getId Function', () => {
    const employee = new Employee('Marcio', 1, 'marcio@gmail.com');

    expect(employee.getId()).toEqual(1);
})

test('Test getEmail Function', () => {
    const employee = new Employee('Marcio', 1, 'marcio@gmail.com');

    expect(employee.getEmail()).toEqual('marcio@gmail.com');
})

test('Test getRole Function', () => {
    const employee = new Employee('Marcio', 1, 'marcio@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
})