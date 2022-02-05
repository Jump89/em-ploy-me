const Manager = require('../lib/Manager');

test('Create Manager Object', () => {
    const manager = new Manager ('Marcio', 1, 'marcio@gmail.com', 'officeNumber');
    expect(manager.name).toBe('Marcio');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('marcio@gmail.com');
    expect(manager.officeNumber).toEqual('officeNumber');
})

test('Test getOfficeNumber Function', () => {
    const manager = new Manager('Marcio', 1, 'marcio@gmail.com', 'officeNumber');

    expect(manager.getOfficeNumber()).toEqual('officeNumber');
})

test('Test getRole Function', () => {
    const manager = new Manager('Marcio', 1, 'marcio@gmail.com', 'officeNumber');

    expect(manager.getRole()).toEqual('Manager');
})
