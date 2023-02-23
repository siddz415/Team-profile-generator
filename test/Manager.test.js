const Manager = require('..lib/Manager');
const manager = new Manager('john', '12345','johnsmith@yahoo.com', '12');

test ('test if we can get the constructor values for the manager', () => {
    expect(manager.name).toBe('john');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('johnsmith@yahoo.com');
    expect(manager.officeNumber).toBe('12');
})

test ('test if we can get the name from getName()', () => {
    expect(manager.getName()).toBe('john');
})

test ('test if we can get the id from getId()', () => {
    expect(manager.getId()).toBe('12345');
})

test ('test if we can get the email from getEmail()', () => {
    expect(manager.getEmail()).toBe('johnsmith@yahoo.com');
})

test ('test if we can get the office Number from getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('12');
})

test ('test if we can get the role from getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
})