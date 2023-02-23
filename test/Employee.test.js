const Employee = require('..lib/Employee');
const employee = new Employee('john', '12345','johnsmith@yahoo.com');

test ('test if we can get the constructor values for the employee', () => {
    expect(employee.name).toBe('john');
    expect(employee.id).toBe('12345');
    expect(employee.email).toBe('johnsmith@yahoo.com')
})

test ('test if we can get the name from getName()', () => {
    expect(employee.getName()).toBe('john');
})

test ('test if we can get the Id from getId()', () => {
    expect(employee.getId()).toBe('12345');
})

test ('test if we can get the email from getEmail()', () => {
    expect(employee.getEmail()).toBe('johnsmith@yahoo.com');
})

test ('test if we can get the role from getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
})